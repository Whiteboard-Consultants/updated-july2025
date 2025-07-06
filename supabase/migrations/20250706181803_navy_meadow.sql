/*
  # Complete LMS Database Schema

  1. Core Tables
    - `users` - User management (students, instructors, admins)
    - `courses` - Course catalog and information
    - `enrollments` - Student course enrollments
    - `lessons` - Individual lessons within courses
    - `assignments` - Course assignments and tasks
    - `submissions` - Student assignment submissions
    - `grades` - Grading system
    - `certificates` - Course completion certificates
    - `progress` - Student learning progress tracking
    - `messages` - Internal messaging system
    - `notifications` - System notifications
    - `categories` - Course categories
    - `resources` - Course materials and files
    - `quizzes` - Assessment system
    - `quiz_attempts` - Quiz submission tracking
    - `forums` - Discussion forums
    - `forum_posts` - Forum discussions
    - `calendar_events` - Scheduling system
    - `payments` - Payment tracking
    - `reviews` - Course reviews and ratings

  2. Security
    - Enable RLS on all tables
    - Add appropriate policies for each user role
    - Secure data access based on user permissions

  3. Features Supported
    - Multi-role user system (admin, instructor, student)
    - Course management and enrollment
    - Progress tracking and analytics
    - Assignment and grading system
    - Messaging and notifications
    - Certificate generation
    - Payment processing
    - Discussion forums
    - Calendar and scheduling
    - Resource management
*/

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create enum types
CREATE TYPE user_role AS ENUM ('admin', 'instructor', 'student');
CREATE TYPE enrollment_status AS ENUM ('active', 'completed', 'dropped', 'pending');
CREATE TYPE assignment_type AS ENUM ('quiz', 'essay', 'project', 'presentation', 'practice_test');
CREATE TYPE submission_status AS ENUM ('draft', 'submitted', 'graded', 'returned');
CREATE TYPE payment_status AS ENUM ('pending', 'completed', 'failed', 'refunded');
CREATE TYPE notification_type AS ENUM ('course', 'assignment', 'grade', 'message', 'system');

-- Users table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  first_name text NOT NULL,
  last_name text NOT NULL,
  role user_role NOT NULL DEFAULT 'student',
  avatar_url text,
  phone text,
  bio text,
  date_of_birth date,
  address jsonb,
  is_active boolean DEFAULT true,
  last_login timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Course categories
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  icon text,
  color text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Courses table
CREATE TABLE IF NOT EXISTS courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  short_description text,
  category_id uuid REFERENCES categories(id),
  instructor_id uuid REFERENCES users(id) NOT NULL,
  thumbnail_url text,
  price decimal(10,2) DEFAULT 0,
  duration_weeks integer,
  difficulty_level text CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced')),
  max_students integer,
  prerequisites text[],
  learning_objectives text[],
  is_published boolean DEFAULT false,
  is_featured boolean DEFAULT false,
  rating decimal(3,2) DEFAULT 0,
  total_reviews integer DEFAULT 0,
  total_enrollments integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Course lessons
CREATE TABLE IF NOT EXISTS lessons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  description text,
  content text,
  video_url text,
  duration_minutes integer,
  order_index integer NOT NULL,
  is_preview boolean DEFAULT false,
  resources jsonb DEFAULT '[]',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Student enrollments
CREATE TABLE IF NOT EXISTS enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE NOT NULL,
  status enrollment_status DEFAULT 'active',
  enrolled_at timestamptz DEFAULT now(),
  completed_at timestamptz,
  progress_percentage decimal(5,2) DEFAULT 0,
  last_accessed timestamptz,
  certificate_issued boolean DEFAULT false,
  UNIQUE(student_id, course_id)
);

-- Student progress tracking
CREATE TABLE IF NOT EXISTS progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  lesson_id uuid REFERENCES lessons(id) ON DELETE CASCADE NOT NULL,
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE NOT NULL,
  is_completed boolean DEFAULT false,
  time_spent_minutes integer DEFAULT 0,
  last_position integer DEFAULT 0,
  completed_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(student_id, lesson_id)
);

-- Assignments
CREATE TABLE IF NOT EXISTS assignments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE NOT NULL,
  lesson_id uuid REFERENCES lessons(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  instructions text,
  type assignment_type NOT NULL,
  max_points integer DEFAULT 100,
  due_date timestamptz,
  is_published boolean DEFAULT false,
  allow_late_submission boolean DEFAULT true,
  late_penalty_percentage decimal(5,2) DEFAULT 0,
  resources jsonb DEFAULT '[]',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Assignment submissions
CREATE TABLE IF NOT EXISTS submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  assignment_id uuid REFERENCES assignments(id) ON DELETE CASCADE NOT NULL,
  student_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  content text,
  file_urls text[],
  status submission_status DEFAULT 'draft',
  submitted_at timestamptz,
  graded_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(assignment_id, student_id)
);

-- Grades
CREATE TABLE IF NOT EXISTS grades (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id uuid REFERENCES submissions(id) ON DELETE CASCADE NOT NULL,
  grader_id uuid REFERENCES users(id) NOT NULL,
  points_earned decimal(5,2),
  max_points decimal(5,2),
  percentage decimal(5,2),
  letter_grade text,
  feedback text,
  rubric_scores jsonb,
  is_final boolean DEFAULT false,
  graded_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Quizzes
CREATE TABLE IF NOT EXISTS quizzes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE NOT NULL,
  lesson_id uuid REFERENCES lessons(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  instructions text,
  time_limit_minutes integer,
  max_attempts integer DEFAULT 1,
  passing_score decimal(5,2) DEFAULT 70,
  questions jsonb NOT NULL DEFAULT '[]',
  is_published boolean DEFAULT false,
  randomize_questions boolean DEFAULT false,
  show_correct_answers boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Quiz attempts
CREATE TABLE IF NOT EXISTS quiz_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  quiz_id uuid REFERENCES quizzes(id) ON DELETE CASCADE NOT NULL,
  student_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  attempt_number integer NOT NULL,
  answers jsonb DEFAULT '{}',
  score decimal(5,2),
  percentage decimal(5,2),
  is_completed boolean DEFAULT false,
  started_at timestamptz DEFAULT now(),
  completed_at timestamptz,
  time_taken_minutes integer
);

-- Certificates
CREATE TABLE IF NOT EXISTS certificates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE NOT NULL,
  certificate_number text UNIQUE NOT NULL,
  issued_date timestamptz DEFAULT now(),
  expiry_date timestamptz,
  certificate_url text,
  verification_code text UNIQUE,
  is_valid boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Messages
CREATE TABLE IF NOT EXISTS messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  sender_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  recipient_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  subject text,
  content text NOT NULL,
  is_read boolean DEFAULT false,
  parent_message_id uuid REFERENCES messages(id),
  course_id uuid REFERENCES courses(id),
  sent_at timestamptz DEFAULT now(),
  read_at timestamptz
);

-- Notifications
CREATE TABLE IF NOT EXISTS notifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  message text NOT NULL,
  type notification_type NOT NULL,
  is_read boolean DEFAULT false,
  action_url text,
  metadata jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  read_at timestamptz
);

-- Course resources
CREATE TABLE IF NOT EXISTS resources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE NOT NULL,
  lesson_id uuid REFERENCES lessons(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  file_url text NOT NULL,
  file_type text,
  file_size bigint,
  is_downloadable boolean DEFAULT true,
  order_index integer,
  created_at timestamptz DEFAULT now()
);

-- Discussion forums
CREATE TABLE IF NOT EXISTS forums (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  description text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Forum posts
CREATE TABLE IF NOT EXISTS forum_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  forum_id uuid REFERENCES forums(id) ON DELETE CASCADE NOT NULL,
  author_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  parent_post_id uuid REFERENCES forum_posts(id),
  title text,
  content text NOT NULL,
  is_pinned boolean DEFAULT false,
  is_locked boolean DEFAULT false,
  likes_count integer DEFAULT 0,
  replies_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Calendar events
CREATE TABLE IF NOT EXISTS calendar_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  start_time timestamptz NOT NULL,
  end_time timestamptz NOT NULL,
  course_id uuid REFERENCES courses(id),
  instructor_id uuid REFERENCES users(id),
  event_type text CHECK (event_type IN ('class', 'assignment_due', 'exam', 'office_hours', 'holiday')),
  location text,
  meeting_url text,
  is_recurring boolean DEFAULT false,
  recurrence_pattern jsonb,
  attendees uuid[],
  created_at timestamptz DEFAULT now()
);

-- Payments
CREATE TABLE IF NOT EXISTS payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE NOT NULL,
  amount decimal(10,2) NOT NULL,
  currency text DEFAULT 'INR',
  status payment_status DEFAULT 'pending',
  payment_method text,
  transaction_id text UNIQUE,
  payment_gateway text,
  gateway_response jsonb,
  paid_at timestamptz,
  created_at timestamptz DEFAULT now()
);

-- Course reviews
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE NOT NULL,
  student_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  rating integer CHECK (rating >= 1 AND rating <= 5) NOT NULL,
  review_text text,
  is_published boolean DEFAULT true,
  helpful_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(course_id, student_id)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
CREATE INDEX IF NOT EXISTS idx_courses_instructor ON courses(instructor_id);
CREATE INDEX IF NOT EXISTS idx_courses_category ON courses(category_id);
CREATE INDEX IF NOT EXISTS idx_courses_published ON courses(is_published);
CREATE INDEX IF NOT EXISTS idx_enrollments_student ON enrollments(student_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_course ON enrollments(course_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_status ON enrollments(status);
CREATE INDEX IF NOT EXISTS idx_lessons_course ON lessons(course_id);
CREATE INDEX IF NOT EXISTS idx_progress_student ON progress(student_id);
CREATE INDEX IF NOT EXISTS idx_progress_course ON progress(course_id);
CREATE INDEX IF NOT EXISTS idx_assignments_course ON assignments(course_id);
CREATE INDEX IF NOT EXISTS idx_submissions_assignment ON submissions(assignment_id);
CREATE INDEX IF NOT EXISTS idx_submissions_student ON submissions(student_id);
CREATE INDEX IF NOT EXISTS idx_messages_recipient ON messages(recipient_id);
CREATE INDEX IF NOT EXISTS idx_notifications_user ON notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_unread ON notifications(user_id, is_read);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE grades ENABLE ROW LEVEL SECURITY;
ALTER TABLE quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE forums ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE calendar_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Users policies
CREATE POLICY "Users can read own profile" ON users
  FOR SELECT TO authenticated
  USING (auth.uid() = auth_id);

CREATE POLICY "Users can update own profile" ON users
  FOR UPDATE TO authenticated
  USING (auth.uid() = auth_id);

CREATE POLICY "Admins can read all users" ON users
  FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE auth_id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Instructors can read students in their courses" ON users
  FOR SELECT TO authenticated
  USING (
    role = 'student' AND
    EXISTS (
      SELECT 1 FROM users u
      JOIN courses c ON c.instructor_id = u.id
      JOIN enrollments e ON e.course_id = c.id
      WHERE u.auth_id = auth.uid() AND u.role = 'instructor' AND e.student_id = users.id
    )
  );

-- Categories policies
CREATE POLICY "Anyone can read categories" ON categories
  FOR SELECT TO authenticated
  USING (is_active = true);

CREATE POLICY "Admins can manage categories" ON categories
  FOR ALL TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE auth_id = auth.uid() AND role = 'admin'
    )
  );

-- Courses policies
CREATE POLICY "Anyone can read published courses" ON courses
  FOR SELECT TO authenticated
  USING (is_published = true);

CREATE POLICY "Instructors can read own courses" ON courses
  FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE auth_id = auth.uid() AND id = instructor_id
    )
  );

CREATE POLICY "Instructors can manage own courses" ON courses
  FOR ALL TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE auth_id = auth.uid() AND id = instructor_id
    )
  );

CREATE POLICY "Admins can manage all courses" ON courses
  FOR ALL TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE auth_id = auth.uid() AND role = 'admin'
    )
  );

-- Enrollments policies
CREATE POLICY "Students can read own enrollments" ON enrollments
  FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE auth_id = auth.uid() AND id = student_id
    )
  );

CREATE POLICY "Students can create own enrollments" ON enrollments
  FOR INSERT TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM users 
      WHERE auth_id = auth.uid() AND id = student_id
    )
  );

CREATE POLICY "Instructors can read enrollments for their courses" ON enrollments
  FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users u
      JOIN courses c ON c.instructor_id = u.id
      WHERE u.auth_id = auth.uid() AND c.id = course_id
    )
  );

-- Lessons policies
CREATE POLICY "Students can read lessons for enrolled courses" ON lessons
  FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users u
      JOIN enrollments e ON e.student_id = u.id
      WHERE u.auth_id = auth.uid() AND e.course_id = lessons.course_id AND e.status = 'active'
    )
  );

CREATE POLICY "Instructors can manage lessons for own courses" ON lessons
  FOR ALL TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users u
      JOIN courses c ON c.instructor_id = u.id
      WHERE u.auth_id = auth.uid() AND c.id = course_id
    )
  );

-- Progress policies
CREATE POLICY "Students can read own progress" ON progress
  FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE auth_id = auth.uid() AND id = student_id
    )
  );

CREATE POLICY "Students can update own progress" ON progress
  FOR ALL TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE auth_id = auth.uid() AND id = student_id
    )
  );

CREATE POLICY "Instructors can read progress for their courses" ON progress
  FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users u
      JOIN courses c ON c.instructor_id = u.id
      WHERE u.auth_id = auth.uid() AND c.id = course_id
    )
  );

-- Messages policies
CREATE POLICY "Users can read own messages" ON messages
  FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE auth_id = auth.uid() AND (id = sender_id OR id = recipient_id)
    )
  );

CREATE POLICY "Users can send messages" ON messages
  FOR INSERT TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM users 
      WHERE auth_id = auth.uid() AND id = sender_id
    )
  );

-- Notifications policies
CREATE POLICY "Users can read own notifications" ON notifications
  FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE auth_id = auth.uid() AND id = user_id
    )
  );

CREATE POLICY "Users can update own notifications" ON notifications
  FOR UPDATE TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE auth_id = auth.uid() AND id = user_id
    )
  );

-- Create functions for automatic updates
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_courses_updated_at BEFORE UPDATE ON courses
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_lessons_updated_at BEFORE UPDATE ON lessons
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_progress_updated_at BEFORE UPDATE ON progress
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_assignments_updated_at BEFORE UPDATE ON assignments
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_submissions_updated_at BEFORE UPDATE ON submissions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to calculate course progress
CREATE OR REPLACE FUNCTION calculate_course_progress(student_uuid uuid, course_uuid uuid)
RETURNS decimal AS $$
DECLARE
  total_lessons integer;
  completed_lessons integer;
  progress_percentage decimal;
BEGIN
  -- Get total lessons in course
  SELECT COUNT(*) INTO total_lessons
  FROM lessons
  WHERE course_id = course_uuid;
  
  -- Get completed lessons for student
  SELECT COUNT(*) INTO completed_lessons
  FROM progress
  WHERE student_id = student_uuid 
    AND course_id = course_uuid 
    AND is_completed = true;
  
  -- Calculate percentage
  IF total_lessons > 0 THEN
    progress_percentage := (completed_lessons::decimal / total_lessons::decimal) * 100;
  ELSE
    progress_percentage := 0;
  END IF;
  
  -- Update enrollment progress
  UPDATE enrollments 
  SET progress_percentage = progress_percentage
  WHERE student_id = student_uuid AND course_id = course_uuid;
  
  RETURN progress_percentage;
END;
$$ LANGUAGE plpgsql;

-- Function to update course statistics
CREATE OR REPLACE FUNCTION update_course_stats()
RETURNS TRIGGER AS $$
BEGIN
  -- Update total enrollments
  UPDATE courses 
  SET total_enrollments = (
    SELECT COUNT(*) 
    FROM enrollments 
    WHERE course_id = NEW.course_id
  )
  WHERE id = NEW.course_id;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update course stats on enrollment
CREATE TRIGGER update_course_stats_trigger
  AFTER INSERT OR DELETE ON enrollments
  FOR EACH ROW EXECUTE FUNCTION update_course_stats();

-- Function to generate certificate number
CREATE OR REPLACE FUNCTION generate_certificate_number()
RETURNS TRIGGER AS $$
BEGIN
  NEW.certificate_number := 'CERT-' || 
    EXTRACT(YEAR FROM now()) || '-' ||
    LPAD(nextval('certificate_sequence')::text, 6, '0');
  NEW.verification_code := encode(gen_random_bytes(16), 'hex');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create sequence for certificate numbers
CREATE SEQUENCE IF NOT EXISTS certificate_sequence START 1;

-- Trigger for certificate generation
CREATE TRIGGER generate_certificate_number_trigger
  BEFORE INSERT ON certificates
  FOR EACH ROW EXECUTE FUNCTION generate_certificate_number();