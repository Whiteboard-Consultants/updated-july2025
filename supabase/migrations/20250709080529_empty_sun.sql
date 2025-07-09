/*
  # LMS Sample Data Migration - Fixed Foreign Key Dependencies

  1. Sample Data
    - Insert categories for course organization
    - Add sample users (admin, instructors, students)
    - Create sample courses with lessons
    - Add enrollments and progress tracking
    - Include assignments, submissions, and grades
    - Add certificates, messages, and notifications
    - Create calendar events and course reviews

  2. Data Relationships
    - All foreign key relationships properly maintained
    - Sample data covers all major LMS functionality
    - Realistic data for testing and demonstration
    - Proper conflict handling to avoid duplicate key errors
*/

-- First, let's check if we need to insert sample data by checking if it already exists
DO $$
BEGIN
  -- Only proceed if we don't have sample data already
  IF NOT EXISTS (SELECT 1 FROM categories WHERE name = 'Test Preparation') THEN
    
    -- Insert sample categories
    INSERT INTO categories (id, name, description, icon, color) VALUES
      ('750e8400-e29b-41d4-a716-446655440001', 'Test Preparation', 'Standardized test preparation courses', 'BookOpen', '#3B82F6'),
      ('750e8400-e29b-41d4-a716-446655440002', 'Language Skills', 'Communication and language improvement', 'MessageSquare', '#10B981'),
      ('750e8400-e29b-41d4-a716-446655440003', 'Professional Skills', 'Career development and professional training', 'Briefcase', '#F59E0B'),
      ('750e8400-e29b-41d4-a716-446655440004', 'Academic Preparation', 'University and college preparation', 'GraduationCap', '#8B5CF6');

    -- Insert sample users (only if they don't exist)
    INSERT INTO users (id, email, first_name, last_name, role, avatar_url, bio) 
    SELECT * FROM (VALUES
      ('750e8400-e29b-41d4-a716-446655440010', 'admin@whiteboardconsultant.com', 'Sarah', 'Mitchell', 'admin'::user_role, 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg', 'Senior Business Consultant with 15+ years of experience in strategic planning and organizational development.'),
      ('750e8400-e29b-41d4-a716-446655440011', 'instructor@whiteboardconsultant.com', 'David', 'Chen', 'instructor'::user_role, 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg', 'Expert facilitator specializing in team dynamics and collaborative problem-solving with TOEFL/IELTS certification.'),
      ('750e8400-e29b-41d4-a716-446655440012', 'student@whiteboardconsultant.com', 'Priya', 'Sharma', 'student'::user_role, 'https://images.pexels.com/photos/3777936/pexels-photo-3777936.jpeg', 'Aspiring international student preparing for TOEFL and university applications.'),
      ('750e8400-e29b-41d4-a716-446655440013', 'instructor2@whiteboardconsultant.com', 'Maria', 'Rodriguez', 'instructor'::user_role, 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg', 'Innovation specialist with expertise in design thinking and creative methodologies.'),
      ('750e8400-e29b-41d4-a716-446655440014', 'student2@whiteboardconsultant.com', 'Rahul', 'Kumar', 'student'::user_role, 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg', 'Engineering student preparing for GRE and graduate school applications.'),
      ('750e8400-e29b-41d4-a716-446655440015', 'student3@whiteboardconsultant.com', 'Arjun', 'Patel', 'student'::user_role, 'https://images.pexels.com/photos/3777936/pexels-photo-3777936.jpeg', 'Business professional looking to improve public speaking and communication skills.')
    ) AS v(id, email, first_name, last_name, role, avatar_url, bio)
    WHERE NOT EXISTS (SELECT 1 FROM users WHERE email = v.email);

    -- Insert sample courses (only if users exist)
    INSERT INTO courses (id, title, description, short_description, category_id, instructor_id, thumbnail_url, price, duration_weeks, difficulty_level, max_students, prerequisites, learning_objectives, is_published, is_featured, rating, total_reviews)
    SELECT * FROM (VALUES
      ('750e8400-e29b-41d4-a716-446655440020', 'TOEFL Preparation Course', 'Comprehensive TOEFL preparation covering all four sections: Reading, Listening, Speaking, and Writing with practice tests and expert guidance.', 'Master TOEFL with expert guidance and practice tests', '750e8400-e29b-41d4-a716-446655440001', '750e8400-e29b-41d4-a716-446655440011', 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg', 11950.00, 8, 'intermediate', 50, ARRAY['Basic English proficiency', 'High school completion'], ARRAY['Achieve target TOEFL score', 'Master test-taking strategies', 'Improve academic English skills'], true, true, 4.8, 156),
      ('750e8400-e29b-41d4-a716-446655440021', 'IELTS Preparation Course', 'Complete IELTS preparation for Academic and General Training modules with expert guidance and mock tests.', 'Excel in IELTS with comprehensive preparation', '750e8400-e29b-41d4-a716-446655440001', '750e8400-e29b-41d4-a716-446655440011', 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg', 10950.00, 8, 'intermediate', 45, ARRAY['Basic English proficiency'], ARRAY['Achieve band score 7+', 'Master all four skills', 'Understand test format'], true, true, 4.9, 203),
      ('750e8400-e29b-41d4-a716-446655440022', 'Public Speaking Mastery', 'Build confidence and master the art of public speaking with practical exercises and professional techniques.', 'Overcome fear and speak with confidence', '750e8400-e29b-41d4-a716-446655440002', '750e8400-e29b-41d4-a716-446655440013', 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg', 12000.00, 6, 'beginner', 30, ARRAY[]::text[], ARRAY['Build speaking confidence', 'Master presentation skills', 'Engage audiences effectively'], true, false, 4.7, 89),
      ('750e8400-e29b-41d4-a716-446655440023', 'Spoken English Excellence', 'Improve your spoken English fluency, pronunciation, and communication skills for professional and personal success.', 'Achieve fluency in spoken English', '750e8400-e29b-41d4-a716-446655440002', '750e8400-e29b-41d4-a716-446655440013', 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg', 2599.00, 8, 'beginner', 60, ARRAY[]::text[], ARRAY['Improve pronunciation', 'Build vocabulary', 'Gain conversation confidence'], true, true, 4.6, 312),
      ('750e8400-e29b-41d4-a716-446655440024', 'GRE Preparation Course', 'Comprehensive GRE preparation covering Verbal Reasoning, Quantitative Reasoning, and Analytical Writing sections.', 'Master GRE with proven strategies', '750e8400-e29b-41d4-a716-446655440001', '750e8400-e29b-41d4-a716-446655440011', 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg', 29950.00, 10, 'advanced', 35, ARRAY['Bachelor degree', 'Strong math foundation'], ARRAY['Score 320+ on GRE', 'Master analytical writing', 'Excel in quantitative reasoning'], true, false, 4.8, 67)
    ) AS v(id, title, description, short_description, category_id, instructor_id, thumbnail_url, price, duration_weeks, difficulty_level, max_students, prerequisites, learning_objectives, is_published, is_featured, rating, total_reviews)
    WHERE EXISTS (SELECT 1 FROM users WHERE id = v.instructor_id)
    AND EXISTS (SELECT 1 FROM categories WHERE id = v.category_id)
    AND NOT EXISTS (SELECT 1 FROM courses WHERE id = v.id);

    -- Insert sample lessons for TOEFL course
    INSERT INTO lessons (id, course_id, title, description, content, video_url, duration_minutes, order_index, is_preview)
    SELECT * FROM (VALUES
      ('750e8400-e29b-41d4-a716-446655440030', '750e8400-e29b-41d4-a716-446655440020', 'TOEFL Overview and Test Format', 'Introduction to TOEFL iBT structure and scoring system', 'Learn about the four sections of TOEFL iBT: Reading, Listening, Speaking, and Writing. Understand the scoring system and test day procedures.', 'https://example.com/video1', 45, 1, true),
      ('750e8400-e29b-41d4-a716-446655440031', '750e8400-e29b-41d4-a716-446655440020', 'Reading Section Strategies', 'Master reading comprehension techniques', 'Learn effective strategies for tackling TOEFL reading passages including skimming, scanning, and time management.', 'https://example.com/video2', 60, 2, false),
      ('750e8400-e29b-41d4-a716-446655440032', '750e8400-e29b-41d4-a716-446655440020', 'Listening Section Mastery', 'Develop listening skills for academic contexts', 'Practice with lectures, conversations, and note-taking strategies for the TOEFL listening section.', 'https://example.com/video3', 55, 3, false),
      ('750e8400-e29b-41d4-a716-446655440033', '750e8400-e29b-41d4-a716-446655440020', 'Speaking Section Practice', 'Build confidence in speaking tasks', 'Master the four speaking tasks with templates, timing strategies, and pronunciation tips.', 'https://example.com/video4', 50, 4, false),
      ('750e8400-e29b-41d4-a716-446655440034', '750e8400-e29b-41d4-a716-446655440020', 'Writing Section Excellence', 'Excel in integrated and independent writing', 'Learn essay structures, transition words, and time management for both writing tasks.', 'https://example.com/video5', 65, 5, false)
    ) AS v(id, course_id, title, description, content, video_url, duration_minutes, order_index, is_preview)
    WHERE EXISTS (SELECT 1 FROM courses WHERE id = v.course_id)
    AND NOT EXISTS (SELECT 1 FROM lessons WHERE id = v.id);

    -- Insert sample lessons for Public Speaking course
    INSERT INTO lessons (id, course_id, title, description, content, video_url, duration_minutes, order_index, is_preview)
    SELECT * FROM (VALUES
      ('750e8400-e29b-41d4-a716-446655440035', '750e8400-e29b-41d4-a716-446655440022', 'Overcoming Speaking Anxiety', 'Conquer your fear of public speaking', 'Learn techniques to manage nervousness and build confidence before and during presentations.', 'https://example.com/video6', 40, 1, true),
      ('750e8400-e29b-41d4-a716-446655440036', '750e8400-e29b-41d4-a716-446655440022', 'Structuring Your Speech', 'Create compelling presentation structures', 'Master the art of organizing your content with clear introductions, body, and conclusions.', 'https://example.com/video7', 45, 2, false),
      ('750e8400-e29b-41d4-a716-446655440037', '750e8400-e29b-41d4-a716-446655440022', 'Body Language and Voice', 'Master non-verbal communication', 'Learn how to use gestures, posture, and vocal variety to enhance your message.', 'https://example.com/video8', 50, 3, false)
    ) AS v(id, course_id, title, description, content, video_url, duration_minutes, order_index, is_preview)
    WHERE EXISTS (SELECT 1 FROM courses WHERE id = v.course_id)
    AND NOT EXISTS (SELECT 1 FROM lessons WHERE id = v.id);

    -- Insert sample enrollments
    INSERT INTO enrollments (id, student_id, course_id, status, enrolled_at, progress_percentage, last_accessed)
    SELECT * FROM (VALUES
      ('750e8400-e29b-41d4-a716-446655440040', '750e8400-e29b-41d4-a716-446655440012', '750e8400-e29b-41d4-a716-446655440020', 'active'::enrollment_status, '2025-01-01 10:00:00+00'::timestamptz, 75.00, '2025-01-15 14:30:00+00'::timestamptz),
      ('750e8400-e29b-41d4-a716-446655440041', '750e8400-e29b-41d4-a716-446655440012', '750e8400-e29b-41d4-a716-446655440022', 'active'::enrollment_status, '2025-01-05 09:00:00+00'::timestamptz, 45.00, '2025-01-14 16:20:00+00'::timestamptz),
      ('750e8400-e29b-41d4-a716-446655440042', '750e8400-e29b-41d4-a716-446655440012', '750e8400-e29b-41d4-a716-446655440023', 'completed'::enrollment_status, '2024-12-01 08:00:00+00'::timestamptz, 100.00, '2024-12-30 12:00:00+00'::timestamptz),
      ('750e8400-e29b-41d4-a716-446655440043', '750e8400-e29b-41d4-a716-446655440014', '750e8400-e29b-41d4-a716-446655440021', 'active'::enrollment_status, '2025-01-10 11:00:00+00'::timestamptz, 90.00, '2025-01-15 10:15:00+00'::timestamptz),
      ('750e8400-e29b-41d4-a716-446655440044', '750e8400-e29b-41d4-a716-446655440015', '750e8400-e29b-41d4-a716-446655440022', 'active'::enrollment_status, '2025-01-08 13:00:00+00'::timestamptz, 30.00, '2025-01-12 15:45:00+00'::timestamptz)
    ) AS v(id, student_id, course_id, status, enrolled_at, progress_percentage, last_accessed)
    WHERE EXISTS (SELECT 1 FROM users WHERE id = v.student_id)
    AND EXISTS (SELECT 1 FROM courses WHERE id = v.course_id)
    AND NOT EXISTS (SELECT 1 FROM enrollments WHERE student_id = v.student_id AND course_id = v.course_id);

    -- Insert sample progress data
    INSERT INTO progress (id, student_id, lesson_id, course_id, is_completed, time_spent_minutes, completed_at)
    SELECT * FROM (VALUES
      ('750e8400-e29b-41d4-a716-446655440050', '750e8400-e29b-41d4-a716-446655440012', '750e8400-e29b-41d4-a716-446655440030', '750e8400-e29b-41d4-a716-446655440020', true, 45, '2025-01-02 11:00:00+00'::timestamptz),
      ('750e8400-e29b-41d4-a716-446655440051', '750e8400-e29b-41d4-a716-446655440012', '750e8400-e29b-41d4-a716-446655440031', '750e8400-e29b-41d4-a716-446655440020', true, 60, '2025-01-03 14:30:00+00'::timestamptz),
      ('750e8400-e29b-41d4-a716-446655440052', '750e8400-e29b-41d4-a716-446655440012', '750e8400-e29b-41d4-a716-446655440032', '750e8400-e29b-41d4-a716-446655440020', true, 55, '2025-01-05 16:20:00+00'::timestamptz),
      ('750e8400-e29b-41d4-a716-446655440053', '750e8400-e29b-41d4-a716-446655440012', '750e8400-e29b-41d4-a716-446655440033', '750e8400-e29b-41d4-a716-446655440020', false, 25, null),
      ('750e8400-e29b-41d4-a716-446655440054', '750e8400-e29b-41d4-a716-446655440012', '750e8400-e29b-41d4-a716-446655440035', '750e8400-e29b-41d4-a716-446655440022', true, 40, '2025-01-06 10:15:00+00'::timestamptz),
      ('750e8400-e29b-41d4-a716-446655440055', '750e8400-e29b-41d4-a716-446655440012', '750e8400-e29b-41d4-a716-446655440036', '750e8400-e29b-41d4-a716-446655440022', false, 20, null)
    ) AS v(id, student_id, lesson_id, course_id, is_completed, time_spent_minutes, completed_at)
    WHERE EXISTS (SELECT 1 FROM users WHERE id = v.student_id)
    AND EXISTS (SELECT 1 FROM lessons WHERE id = v.lesson_id)
    AND EXISTS (SELECT 1 FROM courses WHERE id = v.course_id)
    AND NOT EXISTS (SELECT 1 FROM progress WHERE student_id = v.student_id AND lesson_id = v.lesson_id);

    -- Insert sample assignments
    INSERT INTO assignments (id, course_id, lesson_id, title, description, type, max_points, due_date, is_published)
    SELECT * FROM (VALUES
      ('750e8400-e29b-41d4-a716-446655440060', '750e8400-e29b-41d4-a716-446655440020', '750e8400-e29b-41d4-a716-446655440031', 'Reading Comprehension Practice', 'Complete practice reading passages and answer comprehension questions', 'practice_test'::assignment_type, 100, '2025-01-20 23:59:00+00'::timestamptz, true),
      ('750e8400-e29b-41d4-a716-446655440061', '750e8400-e29b-41d4-a716-446655440020', '750e8400-e29b-41d4-a716-446655440033', 'Speaking Task Recording', 'Record yourself completing all four speaking tasks', 'presentation'::assignment_type, 100, '2025-01-25 23:59:00+00'::timestamptz, true),
      ('750e8400-e29b-41d4-a716-446655440062', '750e8400-e29b-41d4-a716-446655440022', '750e8400-e29b-41d4-a716-446655440037', 'Presentation Assignment', 'Deliver a 5-minute presentation on a topic of your choice', 'presentation'::assignment_type, 100, '2025-01-30 23:59:00+00'::timestamptz, true)
    ) AS v(id, course_id, lesson_id, title, description, type, max_points, due_date, is_published)
    WHERE EXISTS (SELECT 1 FROM courses WHERE id = v.course_id)
    AND (v.lesson_id IS NULL OR EXISTS (SELECT 1 FROM lessons WHERE id = v.lesson_id))
    AND NOT EXISTS (SELECT 1 FROM assignments WHERE id = v.id);

    -- Insert sample submissions
    INSERT INTO submissions (id, assignment_id, student_id, content, status, submitted_at)
    SELECT * FROM (VALUES
      ('750e8400-e29b-41d4-a716-446655440070', '750e8400-e29b-41d4-a716-446655440060', '750e8400-e29b-41d4-a716-446655440012', 'Completed all reading passages with detailed answers and explanations for each question.', 'graded'::submission_status, '2025-01-18 15:30:00+00'::timestamptz),
      ('750e8400-e29b-41d4-a716-446655440071', '750e8400-e29b-41d4-a716-446655440061', '750e8400-e29b-41d4-a716-446655440012', 'Submitted speaking recordings for all four tasks with clear pronunciation and good timing.', 'submitted'::submission_status, '2025-01-22 18:45:00+00'::timestamptz)
    ) AS v(id, assignment_id, student_id, content, status, submitted_at)
    WHERE EXISTS (SELECT 1 FROM assignments WHERE id = v.assignment_id)
    AND EXISTS (SELECT 1 FROM users WHERE id = v.student_id)
    AND NOT EXISTS (SELECT 1 FROM submissions WHERE assignment_id = v.assignment_id AND student_id = v.student_id);

    -- Insert sample grades
    INSERT INTO grades (id, submission_id, grader_id, points_earned, max_points, percentage, letter_grade, feedback, is_final)
    SELECT * FROM (VALUES
      ('750e8400-e29b-41d4-a716-446655440080', '750e8400-e29b-41d4-a716-446655440070', '750e8400-e29b-41d4-a716-446655440011', 85.00, 100.00, 85.00, 'A', 'Excellent work on reading comprehension. Your analysis shows good understanding of the passages. Work on time management for better efficiency.', true)
    ) AS v(id, submission_id, grader_id, points_earned, max_points, percentage, letter_grade, feedback, is_final)
    WHERE EXISTS (SELECT 1 FROM submissions WHERE id = v.submission_id)
    AND EXISTS (SELECT 1 FROM users WHERE id = v.grader_id)
    AND NOT EXISTS (SELECT 1 FROM grades WHERE id = v.id);

    -- Insert sample certificates
    INSERT INTO certificates (id, student_id, course_id, certificate_number, issued_date, verification_code)
    SELECT * FROM (VALUES
      ('750e8400-e29b-41d4-a716-446655440090', '750e8400-e29b-41d4-a716-446655440012', '750e8400-e29b-41d4-a716-446655440023', 'CERT-2024-000003', '2024-12-30 12:00:00+00'::timestamptz, 'ghi789jkl012mno345')
    ) AS v(id, student_id, course_id, certificate_number, issued_date, verification_code)
    WHERE EXISTS (SELECT 1 FROM users WHERE id = v.student_id)
    AND EXISTS (SELECT 1 FROM courses WHERE id = v.course_id)
    AND NOT EXISTS (SELECT 1 FROM certificates WHERE certificate_number = v.certificate_number);

    -- Insert sample messages
    INSERT INTO messages (id, sender_id, recipient_id, subject, content, is_read, sent_at)
    SELECT * FROM (VALUES
      ('750e8400-e29b-41d4-a716-446655440100', '750e8400-e29b-41d4-a716-446655440011', '750e8400-e29b-41d4-a716-446655440012', 'Great progress on TOEFL course!', 'Hi Priya, I wanted to congratulate you on your excellent progress in the TOEFL preparation course. Your dedication is showing in your practice test scores. Keep up the great work!', true, '2025-01-14 09:30:00+00'::timestamptz),
      ('750e8400-e29b-41d4-a716-446655440101', '750e8400-e29b-41d4-a716-446655440012', '750e8400-e29b-41d4-a716-446655440011', 'Question about speaking section', 'Hi David, I have a question about the speaking section timing. Could we schedule a quick call to discuss strategies for the independent speaking task?', false, '2025-01-15 16:20:00+00'::timestamptz)
    ) AS v(id, sender_id, recipient_id, subject, content, is_read, sent_at)
    WHERE EXISTS (SELECT 1 FROM users WHERE id = v.sender_id)
    AND EXISTS (SELECT 1 FROM users WHERE id = v.recipient_id)
    AND NOT EXISTS (SELECT 1 FROM messages WHERE id = v.id);

    -- Insert sample notifications
    INSERT INTO notifications (id, user_id, title, message, type, is_read)
    SELECT * FROM (VALUES
      ('750e8400-e29b-41d4-a716-446655440110', '750e8400-e29b-41d4-a716-446655440012', 'Assignment Due Soon', 'Your TOEFL Speaking Task Recording is due in 2 days', 'assignment'::notification_type, false),
      ('750e8400-e29b-41d4-a716-446655440111', '750e8400-e29b-41d4-a716-446655440012', 'New Grade Posted', 'Your grade for Reading Comprehension Practice has been posted', 'grade'::notification_type, true),
      ('750e8400-e29b-41d4-a716-446655440112', '750e8400-e29b-41d4-a716-446655440011', 'New Student Enrollment', 'A new student has enrolled in your TOEFL Preparation course', 'course'::notification_type, false)
    ) AS v(id, user_id, title, message, type, is_read)
    WHERE EXISTS (SELECT 1 FROM users WHERE id = v.user_id)
    AND NOT EXISTS (SELECT 1 FROM notifications WHERE id = v.id);

    -- Insert sample reviews
    INSERT INTO reviews (id, course_id, student_id, rating, review_text, helpful_count)
    SELECT * FROM (VALUES
      ('750e8400-e29b-41d4-a716-446655440120', '750e8400-e29b-41d4-a716-446655440023', '750e8400-e29b-41d4-a716-446655440012', 5, 'Excellent course! Maria is a fantastic instructor and the content really helped me improve my spoken English confidence. Highly recommended!', 12),
      ('750e8400-e29b-41d4-a716-446655440121', '750e8400-e29b-41d4-a716-446655440020', '750e8400-e29b-41d4-a716-446655440014', 5, 'David''s TOEFL course is comprehensive and well-structured. The practice tests and feedback were invaluable for my preparation.', 8)
    ) AS v(id, course_id, student_id, rating, review_text, helpful_count)
    WHERE EXISTS (SELECT 1 FROM courses WHERE id = v.course_id)
    AND EXISTS (SELECT 1 FROM users WHERE id = v.student_id)
    AND NOT EXISTS (SELECT 1 FROM reviews WHERE course_id = v.course_id AND student_id = v.student_id);

    -- Insert sample calendar events
    INSERT INTO calendar_events (id, title, description, start_time, end_time, course_id, instructor_id, event_type, meeting_url)
    SELECT * FROM (VALUES
      ('750e8400-e29b-41d4-a716-446655440130', 'TOEFL Speaking Practice Session', 'Live practice session for speaking tasks with feedback', '2025-01-20 14:00:00+00'::timestamptz, '2025-01-20 15:30:00+00'::timestamptz, '750e8400-e29b-41d4-a716-446655440020', '750e8400-e29b-41d4-a716-446655440011', 'class', 'https://zoom.us/j/123456789'),
      ('750e8400-e29b-41d4-a716-446655440131', 'Public Speaking Workshop', 'Interactive workshop on presentation skills', '2025-01-22 16:00:00+00'::timestamptz, '2025-01-22 17:30:00+00'::timestamptz, '750e8400-e29b-41d4-a716-446655440022', '750e8400-e29b-41d4-a716-446655440013', 'class', 'https://zoom.us/j/987654321')
    ) AS v(id, title, description, start_time, end_time, course_id, instructor_id, event_type, meeting_url)
    WHERE (v.course_id IS NULL OR EXISTS (SELECT 1 FROM courses WHERE id = v.course_id))
    AND (v.instructor_id IS NULL OR EXISTS (SELECT 1 FROM users WHERE id = v.instructor_id))
    AND NOT EXISTS (SELECT 1 FROM calendar_events WHERE id = v.id);

    -- Update course statistics (only for courses that exist and have enrollments)
    UPDATE courses SET total_enrollments = (
      SELECT COUNT(*) FROM enrollments WHERE course_id = courses.id
    ) WHERE id IN (
      SELECT DISTINCT course_id FROM enrollments 
      WHERE course_id IN (
        '750e8400-e29b-41d4-a716-446655440020',
        '750e8400-e29b-41d4-a716-446655440021',
        '750e8400-e29b-41d4-a716-446655440022',
        '750e8400-e29b-41d4-a716-446655440023',
        '750e8400-e29b-41d4-a716-446655440024'
      )
    );

  END IF;
END $$;