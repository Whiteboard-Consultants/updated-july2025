# LMS Database Structure Documentation

## Overview

This document describes the complete database structure for the Learning Management System (LMS). The database is designed using Supabase (PostgreSQL) with Row Level Security (RLS) for secure multi-tenant access.

## Database Schema

### Core Tables

#### 1. Users Table
Extends Supabase auth.users with additional profile information.

```sql
users (
  id uuid PRIMARY KEY,
  auth_id uuid REFERENCES auth.users(id),
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
)
```

**Roles**: `admin`, `instructor`, `student`

#### 2. Categories Table
Course categorization system.

```sql
categories (
  id uuid PRIMARY KEY,
  name text NOT NULL,
  description text,
  icon text,
  color text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
)
```

#### 3. Courses Table
Main course information and metadata.

```sql
courses (
  id uuid PRIMARY KEY,
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
)
```

#### 4. Lessons Table
Individual lessons within courses.

```sql
lessons (
  id uuid PRIMARY KEY,
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
)
```

#### 5. Enrollments Table
Student course enrollments and status tracking.

```sql
enrollments (
  id uuid PRIMARY KEY,
  student_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE NOT NULL,
  status enrollment_status DEFAULT 'active',
  enrolled_at timestamptz DEFAULT now(),
  completed_at timestamptz,
  progress_percentage decimal(5,2) DEFAULT 0,
  last_accessed timestamptz,
  certificate_issued boolean DEFAULT false,
  UNIQUE(student_id, course_id)
)
```

**Status Types**: `active`, `completed`, `dropped`, `pending`

#### 6. Progress Table
Detailed lesson-level progress tracking.

```sql
progress (
  id uuid PRIMARY KEY,
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
)
```

### Assessment System

#### 7. Assignments Table
Course assignments and tasks.

```sql
assignments (
  id uuid PRIMARY KEY,
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
)
```

**Assignment Types**: `quiz`, `essay`, `project`, `presentation`, `practice_test`

#### 8. Submissions Table
Student assignment submissions.

```sql
submissions (
  id uuid PRIMARY KEY,
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
)
```

**Submission Status**: `draft`, `submitted`, `graded`, `returned`

#### 9. Grades Table
Grading and feedback system.

```sql
grades (
  id uuid PRIMARY KEY,
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
)
```

#### 10. Quizzes Table
Quiz and assessment system.

```sql
quizzes (
  id uuid PRIMARY KEY,
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
)
```

#### 11. Quiz Attempts Table
Quiz submission tracking.

```sql
quiz_attempts (
  id uuid PRIMARY KEY,
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
)
```

### Communication System

#### 12. Messages Table
Internal messaging system.

```sql
messages (
  id uuid PRIMARY KEY,
  sender_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  recipient_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  subject text,
  content text NOT NULL,
  is_read boolean DEFAULT false,
  parent_message_id uuid REFERENCES messages(id),
  course_id uuid REFERENCES courses(id),
  sent_at timestamptz DEFAULT now(),
  read_at timestamptz
)
```

#### 13. Notifications Table
System notifications.

```sql
notifications (
  id uuid PRIMARY KEY,
  user_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  message text NOT NULL,
  type notification_type NOT NULL,
  is_read boolean DEFAULT false,
  action_url text,
  metadata jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  read_at timestamptz
)
```

**Notification Types**: `course`, `assignment`, `grade`, `message`, `system`

### Additional Features

#### 14. Certificates Table
Course completion certificates.

```sql
certificates (
  id uuid PRIMARY KEY,
  student_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE NOT NULL,
  certificate_number text UNIQUE NOT NULL,
  issued_date timestamptz DEFAULT now(),
  expiry_date timestamptz,
  certificate_url text,
  verification_code text UNIQUE,
  is_valid boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
)
```

#### 15. Resources Table
Course materials and files.

```sql
resources (
  id uuid PRIMARY KEY,
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
)
```

#### 16. Forums Table
Discussion forums.

```sql
forums (
  id uuid PRIMARY KEY,
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  description text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
)
```

#### 17. Forum Posts Table
Forum discussions.

```sql
forum_posts (
  id uuid PRIMARY KEY,
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
)
```

#### 18. Calendar Events Table
Scheduling system.

```sql
calendar_events (
  id uuid PRIMARY KEY,
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
)
```

#### 19. Payments Table
Payment tracking.

```sql
payments (
  id uuid PRIMARY KEY,
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
)
```

**Payment Status**: `pending`, `completed`, `failed`, `refunded`

#### 20. Reviews Table
Course reviews and ratings.

```sql
reviews (
  id uuid PRIMARY KEY,
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE NOT NULL,
  student_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  rating integer CHECK (rating >= 1 AND rating <= 5) NOT NULL,
  review_text text,
  is_published boolean DEFAULT true,
  helpful_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(course_id, student_id)
)
```

## Security (Row Level Security)

All tables have RLS enabled with appropriate policies:

### User Access Patterns
- **Students**: Can only access their own data and enrolled course content
- **Instructors**: Can access their courses and enrolled students' data
- **Admins**: Have full access to all data

### Key Security Policies
- Users can only read/update their own profiles
- Students can only see published courses they're enrolled in
- Instructors can only manage their own courses and students
- Messages are only visible to sender and recipient
- Grades are only visible to the student and grading instructor

## Database Functions

### Utility Functions
- `calculate_course_progress()`: Automatically calculates student progress
- `update_course_stats()`: Updates course enrollment statistics
- `generate_certificate_number()`: Auto-generates unique certificate numbers

### Triggers
- Auto-update `updated_at` timestamps
- Update course statistics on enrollment changes
- Generate certificate numbers and verification codes

## API Integration

The database includes a comprehensive TypeScript API layer with:
- Type-safe interfaces for all tables
- Custom React hooks for data fetching
- Optimized queries with proper joins
- Error handling and loading states

## Sample Data

The database includes comprehensive sample data for testing:
- Demo users (admin, instructors, students)
- Sample courses with lessons
- Enrollment and progress data
- Assignments, submissions, and grades
- Messages and notifications
- Calendar events and certificates

## Setup Instructions

1. **Create Supabase Project**
   - Sign up at [supabase.com](https://supabase.com)
   - Create a new project

2. **Run Migrations**
   ```bash
   # Run the schema migration
   supabase db push

   # Or manually run the SQL files in order:
   # 1. create_lms_schema.sql
   # 2. seed_sample_data.sql
   ```

3. **Configure Environment**
   ```bash
   # Copy .env.example to .env
   cp .env.example .env
   
   # Add your Supabase credentials
   VITE_SUPABASE_URL=your_project_url
   VITE_SUPABASE_ANON_KEY=your_anon_key
   ```

4. **Test the System**
   - Use the demo login credentials
   - Explore different user roles
   - Test course enrollment and progress tracking

## Performance Considerations

- **Indexes**: Optimized indexes on frequently queried columns
- **Pagination**: Implement pagination for large datasets
- **Caching**: Consider Redis for frequently accessed data
- **File Storage**: Use Supabase Storage for course materials and uploads

## Future Enhancements

- **Real-time Features**: WebSocket integration for live chat and notifications
- **Analytics**: Advanced reporting and analytics dashboard
- **Mobile App**: React Native app with offline capabilities
- **AI Integration**: Automated grading and personalized learning paths
- **Video Streaming**: Integrated video hosting and streaming
- **Multi-language**: Internationalization support

This database structure provides a solid foundation for a full-featured LMS system with room for future expansion and customization.