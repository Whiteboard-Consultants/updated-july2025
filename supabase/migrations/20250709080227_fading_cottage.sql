/*
  # LMS Sample Data Migration - Fixed Duplicate Keys

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
    - Uses ON CONFLICT to handle existing data
*/

-- Insert sample categories (with conflict handling)
INSERT INTO categories (id, name, description, icon, color) VALUES
  ('650e8400-e29b-41d4-a716-446655440001', 'Test Preparation', 'Standardized test preparation courses', 'BookOpen', '#3B82F6'),
  ('650e8400-e29b-41d4-a716-446655440002', 'Language Skills', 'Communication and language improvement', 'MessageSquare', '#10B981'),
  ('650e8400-e29b-41d4-a716-446655440003', 'Professional Skills', 'Career development and professional training', 'Briefcase', '#F59E0B'),
  ('650e8400-e29b-41d4-a716-446655440004', 'Academic Preparation', 'University and college preparation', 'GraduationCap', '#8B5CF6')
ON CONFLICT (id) DO NOTHING;

-- Insert sample users (these will be created when users sign up through Supabase Auth)
-- Note: In production, these would be created through the authentication flow
INSERT INTO users (id, email, first_name, last_name, role, avatar_url, bio) VALUES
  ('650e8400-e29b-41d4-a716-446655440010', 'admin@whiteboardconsultant.com', 'Sarah', 'Mitchell', 'admin', 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg', 'Senior Business Consultant with 15+ years of experience in strategic planning and organizational development.'),
  ('650e8400-e29b-41d4-a716-446655440011', 'instructor@whiteboardconsultant.com', 'David', 'Chen', 'instructor', 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg', 'Expert facilitator specializing in team dynamics and collaborative problem-solving with TOEFL/IELTS certification.'),
  ('650e8400-e29b-41d4-a716-446655440012', 'student@whiteboardconsultant.com', 'Priya', 'Sharma', 'student', 'https://images.pexels.com/photos/3777936/pexels-photo-3777936.jpeg', 'Aspiring international student preparing for TOEFL and university applications.'),
  ('650e8400-e29b-41d4-a716-446655440013', 'instructor2@whiteboardconsultant.com', 'Maria', 'Rodriguez', 'instructor', 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg', 'Innovation specialist with expertise in design thinking and creative methodologies.'),
  ('650e8400-e29b-41d4-a716-446655440014', 'student2@whiteboardconsultant.com', 'Rahul', 'Kumar', 'student', 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg', 'Engineering student preparing for GRE and graduate school applications.'),
  ('650e8400-e29b-41d4-a716-446655440015', 'student3@whiteboardconsultant.com', 'Arjun', 'Patel', 'student', 'https://images.pexels.com/photos/3777936/pexels-photo-3777936.jpeg', 'Business professional looking to improve public speaking and communication skills.')
ON CONFLICT (email) DO NOTHING;

-- Insert sample courses
INSERT INTO courses (id, title, description, short_description, category_id, instructor_id, thumbnail_url, price, duration_weeks, difficulty_level, max_students, prerequisites, learning_objectives, is_published, is_featured, rating, total_reviews) VALUES
  ('650e8400-e29b-41d4-a716-446655440020', 'TOEFL Preparation Course', 'Comprehensive TOEFL preparation covering all four sections: Reading, Listening, Speaking, and Writing with practice tests and expert guidance.', 'Master TOEFL with expert guidance and practice tests', '650e8400-e29b-41d4-a716-446655440001', '650e8400-e29b-41d4-a716-446655440011', 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg', 11950.00, 8, 'intermediate', 50, ARRAY['Basic English proficiency', 'High school completion'], ARRAY['Achieve target TOEFL score', 'Master test-taking strategies', 'Improve academic English skills'], true, true, 4.8, 156),
  
  ('650e8400-e29b-41d4-a716-446655440021', 'IELTS Preparation Course', 'Complete IELTS preparation for Academic and General Training modules with expert guidance and mock tests.', 'Excel in IELTS with comprehensive preparation', '650e8400-e29b-41d4-a716-446655440001', '650e8400-e29b-41d4-a716-446655440011', 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg', 10950.00, 8, 'intermediate', 45, ARRAY['Basic English proficiency'], ARRAY['Achieve band score 7+', 'Master all four skills', 'Understand test format'], true, true, 4.9, 203),
  
  ('650e8400-e29b-41d4-a716-446655440022', 'Public Speaking Mastery', 'Build confidence and master the art of public speaking with practical exercises and professional techniques.', 'Overcome fear and speak with confidence', '650e8400-e29b-41d4-a716-446655440002', '650e8400-e29b-41d4-a716-446655440013', 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg', 12000.00, 6, 'beginner', 30, ARRAY[]::text[], ARRAY['Build speaking confidence', 'Master presentation skills', 'Engage audiences effectively'], true, false, 4.7, 89),
  
  ('650e8400-e29b-41d4-a716-446655440023', 'Spoken English Excellence', 'Improve your spoken English fluency, pronunciation, and communication skills for professional and personal success.', 'Achieve fluency in spoken English', '650e8400-e29b-41d4-a716-446655440002', '650e8400-e29b-41d4-a716-446655440013', 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg', 2599.00, 8, 'beginner', 60, ARRAY[]::text[], ARRAY['Improve pronunciation', 'Build vocabulary', 'Gain conversation confidence'], true, true, 4.6, 312),
  
  ('650e8400-e29b-41d4-a716-446655440024', 'GRE Preparation Course', 'Comprehensive GRE preparation covering Verbal Reasoning, Quantitative Reasoning, and Analytical Writing sections.', 'Master GRE with proven strategies', '650e8400-e29b-41d4-a716-446655440001', '650e8400-e29b-41d4-a716-446655440011', 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg', 29950.00, 10, 'advanced', 35, ARRAY['Bachelor degree', 'Strong math foundation'], ARRAY['Score 320+ on GRE', 'Master analytical writing', 'Excel in quantitative reasoning'], true, false, 4.8, 67)
ON CONFLICT (id) DO NOTHING;

-- Insert sample lessons for TOEFL course
INSERT INTO lessons (id, course_id, title, description, content, video_url, duration_minutes, order_index, is_preview) VALUES
  ('650e8400-e29b-41d4-a716-446655440030', '650e8400-e29b-41d4-a716-446655440020', 'TOEFL Overview and Test Format', 'Introduction to TOEFL iBT structure and scoring system', 'Learn about the four sections of TOEFL iBT: Reading, Listening, Speaking, and Writing. Understand the scoring system and test day procedures.', 'https://example.com/video1', 45, 1, true),
  ('650e8400-e29b-41d4-a716-446655440031', '650e8400-e29b-41d4-a716-446655440020', 'Reading Section Strategies', 'Master reading comprehension techniques', 'Learn effective strategies for tackling TOEFL reading passages including skimming, scanning, and time management.', 'https://example.com/video2', 60, 2, false),
  ('650e8400-e29b-41d4-a716-446655440032', '650e8400-e29b-41d4-a716-446655440020', 'Listening Section Mastery', 'Develop listening skills for academic contexts', 'Practice with lectures, conversations, and note-taking strategies for the TOEFL listening section.', 'https://example.com/video3', 55, 3, false),
  ('650e8400-e29b-41d4-a716-446655440033', '650e8400-e29b-41d4-a716-446655440020', 'Speaking Section Practice', 'Build confidence in speaking tasks', 'Master the four speaking tasks with templates, timing strategies, and pronunciation tips.', 'https://example.com/video4', 50, 4, false),
  ('650e8400-e29b-41d4-a716-446655440034', '650e8400-e29b-41d4-a716-446655440020', 'Writing Section Excellence', 'Excel in integrated and independent writing', 'Learn essay structures, transition words, and time management for both writing tasks.', 'https://example.com/video5', 65, 5, false)
ON CONFLICT (id) DO NOTHING;

-- Insert sample lessons for Public Speaking course
INSERT INTO lessons (id, course_id, title, description, content, video_url, duration_minutes, order_index, is_preview) VALUES
  ('650e8400-e29b-41d4-a716-446655440035', '650e8400-e29b-41d4-a716-446655440022', 'Overcoming Speaking Anxiety', 'Conquer your fear of public speaking', 'Learn techniques to manage nervousness and build confidence before and during presentations.', 'https://example.com/video6', 40, 1, true),
  ('650e8400-e29b-41d4-a716-446655440036', '650e8400-e29b-41d4-a716-446655440022', 'Structuring Your Speech', 'Create compelling presentation structures', 'Master the art of organizing your content with clear introductions, body, and conclusions.', 'https://example.com/video7', 45, 2, false),
  ('650e8400-e29b-41d4-a716-446655440037', '650e8400-e29b-41d4-a716-446655440022', 'Body Language and Voice', 'Master non-verbal communication', 'Learn how to use gestures, posture, and vocal variety to enhance your message.', 'https://example.com/video8', 50, 3, false)
ON CONFLICT (id) DO NOTHING;

-- Insert sample enrollments
INSERT INTO enrollments (id, student_id, course_id, status, enrolled_at, progress_percentage, last_accessed) VALUES
  ('650e8400-e29b-41d4-a716-446655440040', '650e8400-e29b-41d4-a716-446655440012', '650e8400-e29b-41d4-a716-446655440020', 'active', '2025-01-01 10:00:00+00', 75.00, '2025-01-15 14:30:00+00'),
  ('650e8400-e29b-41d4-a716-446655440041', '650e8400-e29b-41d4-a716-446655440012', '650e8400-e29b-41d4-a716-446655440022', 'active', '2025-01-05 09:00:00+00', 45.00, '2025-01-14 16:20:00+00'),
  ('650e8400-e29b-41d4-a716-446655440042', '650e8400-e29b-41d4-a716-446655440012', '650e8400-e29b-41d4-a716-446655440023', 'completed', '2024-12-01 08:00:00+00', 100.00, '2024-12-30 12:00:00+00'),
  ('650e8400-e29b-41d4-a716-446655440043', '650e8400-e29b-41d4-a716-446655440014', '650e8400-e29b-41d4-a716-446655440021', 'active', '2025-01-10 11:00:00+00', 90.00, '2025-01-15 10:15:00+00'),
  ('650e8400-e29b-41d4-a716-446655440044', '650e8400-e29b-41d4-a716-446655440015', '650e8400-e29b-41d4-a716-446655440022', 'active', '2025-01-08 13:00:00+00', 30.00, '2025-01-12 15:45:00+00')
ON CONFLICT (student_id, course_id) DO NOTHING;

-- Insert sample progress data
INSERT INTO progress (id, student_id, lesson_id, course_id, is_completed, time_spent_minutes, completed_at) VALUES
  ('650e8400-e29b-41d4-a716-446655440050', '650e8400-e29b-41d4-a716-446655440012', '650e8400-e29b-41d4-a716-446655440030', '650e8400-e29b-41d4-a716-446655440020', true, 45, '2025-01-02 11:00:00+00'),
  ('650e8400-e29b-41d4-a716-446655440051', '650e8400-e29b-41d4-a716-446655440012', '650e8400-e29b-41d4-a716-446655440031', '650e8400-e29b-41d4-a716-446655440020', true, 60, '2025-01-03 14:30:00+00'),
  ('650e8400-e29b-41d4-a716-446655440052', '650e8400-e29b-41d4-a716-446655440012', '650e8400-e29b-41d4-a716-446655440032', '650e8400-e29b-41d4-a716-446655440020', true, 55, '2025-01-05 16:20:00+00'),
  ('650e8400-e29b-41d4-a716-446655440053', '650e8400-e29b-41d4-a716-446655440012', '650e8400-e29b-41d4-a716-446655440033', '650e8400-e29b-41d4-a716-446655440020', false, 25, null),
  ('650e8400-e29b-41d4-a716-446655440054', '650e8400-e29b-41d4-a716-446655440012', '650e8400-e29b-41d4-a716-446655440035', '650e8400-e29b-41d4-a716-446655440022', true, 40, '2025-01-06 10:15:00+00'),
  ('650e8400-e29b-41d4-a716-446655440055', '650e8400-e29b-41d4-a716-446655440012', '650e8400-e29b-41d4-a716-446655440036', '650e8400-e29b-41d4-a716-446655440022', false, 20, null)
ON CONFLICT (student_id, lesson_id) DO NOTHING;

-- Insert sample assignments
INSERT INTO assignments (id, course_id, lesson_id, title, description, type, max_points, due_date, is_published) VALUES
  ('650e8400-e29b-41d4-a716-446655440060', '650e8400-e29b-41d4-a716-446655440020', '650e8400-e29b-41d4-a716-446655440031', 'Reading Comprehension Practice', 'Complete practice reading passages and answer comprehension questions', 'practice_test', 100, '2025-01-20 23:59:00+00', true),
  ('650e8400-e29b-41d4-a716-446655440061', '650e8400-e29b-41d4-a716-446655440020', '650e8400-e29b-41d4-a716-446655440033', 'Speaking Task Recording', 'Record yourself completing all four speaking tasks', 'presentation', 100, '2025-01-25 23:59:00+00', true),
  ('650e8400-e29b-41d4-a716-446655440062', '650e8400-e29b-41d4-a716-446655440022', '650e8400-e29b-41d4-a716-446655440037', 'Presentation Assignment', 'Deliver a 5-minute presentation on a topic of your choice', 'presentation', 100, '2025-01-30 23:59:00+00', true)
ON CONFLICT (id) DO NOTHING;

-- Insert sample submissions
INSERT INTO submissions (id, assignment_id, student_id, content, status, submitted_at) VALUES
  ('650e8400-e29b-41d4-a716-446655440070', '650e8400-e29b-41d4-a716-446655440060', '650e8400-e29b-41d4-a716-446655440012', 'Completed all reading passages with detailed answers and explanations for each question.', 'graded', '2025-01-18 15:30:00+00'),
  ('650e8400-e29b-41d4-a716-446655440071', '650e8400-e29b-41d4-a716-446655440061', '650e8400-e29b-41d4-a716-446655440012', 'Submitted speaking recordings for all four tasks with clear pronunciation and good timing.', 'submitted', '2025-01-22 18:45:00+00')
ON CONFLICT (assignment_id, student_id) DO NOTHING;

-- Insert sample grades
INSERT INTO grades (id, submission_id, grader_id, points_earned, max_points, percentage, letter_grade, feedback, is_final) VALUES
  ('650e8400-e29b-41d4-a716-446655440080', '650e8400-e29b-41d4-a716-446655440070', '650e8400-e29b-41d4-a716-446655440011', 85.00, 100.00, 85.00, 'A', 'Excellent work on reading comprehension. Your analysis shows good understanding of the passages. Work on time management for better efficiency.', true)
ON CONFLICT (id) DO NOTHING;

-- Insert sample certificates
INSERT INTO certificates (id, student_id, course_id, certificate_number, issued_date, verification_code) VALUES
  ('650e8400-e29b-41d4-a716-446655440090', '650e8400-e29b-41d4-a716-446655440012', '650e8400-e29b-41d4-a716-446655440023', 'CERT-2024-000002', '2024-12-30 12:00:00+00', 'def456ghi789jkl012')
ON CONFLICT (certificate_number) DO UPDATE SET 
  certificate_number = EXCLUDED.certificate_number || '-' || EXTRACT(EPOCH FROM now())::text;

-- Insert sample messages
INSERT INTO messages (id, sender_id, recipient_id, subject, content, is_read, sent_at) VALUES
  ('650e8400-e29b-41d4-a716-446655440100', '650e8400-e29b-41d4-a716-446655440011', '650e8400-e29b-41d4-a716-446655440012', 'Great progress on TOEFL course!', 'Hi Priya, I wanted to congratulate you on your excellent progress in the TOEFL preparation course. Your dedication is showing in your practice test scores. Keep up the great work!', true, '2025-01-14 09:30:00+00'),
  ('650e8400-e29b-41d4-a716-446655440101', '650e8400-e29b-41d4-a716-446655440012', '650e8400-e29b-41d4-a716-446655440011', 'Question about speaking section', 'Hi David, I have a question about the speaking section timing. Could we schedule a quick call to discuss strategies for the independent speaking task?', false, '2025-01-15 16:20:00+00')
ON CONFLICT (id) DO NOTHING;

-- Insert sample notifications
INSERT INTO notifications (id, user_id, title, message, type, is_read) VALUES
  ('650e8400-e29b-41d4-a716-446655440110', '650e8400-e29b-41d4-a716-446655440012', 'Assignment Due Soon', 'Your TOEFL Speaking Task Recording is due in 2 days', 'assignment', false),
  ('650e8400-e29b-41d4-a716-446655440111', '650e8400-e29b-41d4-a716-446655440012', 'New Grade Posted', 'Your grade for Reading Comprehension Practice has been posted', 'grade', true),
  ('650e8400-e29b-41d4-a716-446655440112', '650e8400-e29b-41d4-a716-446655440011', 'New Student Enrollment', 'A new student has enrolled in your TOEFL Preparation course', 'course', false)
ON CONFLICT (id) DO NOTHING;

-- Insert sample reviews
INSERT INTO reviews (id, course_id, student_id, rating, review_text, helpful_count) VALUES
  ('650e8400-e29b-41d4-a716-446655440120', '650e8400-e29b-41d4-a716-446655440023', '650e8400-e29b-41d4-a716-446655440012', 5, 'Excellent course! Maria is a fantastic instructor and the content really helped me improve my spoken English confidence. Highly recommended!', 12),
  ('650e8400-e29b-41d4-a716-446655440121', '650e8400-e29b-41d4-a716-446655440020', '650e8400-e29b-41d4-a716-446655440014', 5, 'David''s TOEFL course is comprehensive and well-structured. The practice tests and feedback were invaluable for my preparation.', 8)
ON CONFLICT (course_id, student_id) DO NOTHING;

-- Insert sample calendar events
INSERT INTO calendar_events (id, title, description, start_time, end_time, course_id, instructor_id, event_type, meeting_url) VALUES
  ('650e8400-e29b-41d4-a716-446655440130', 'TOEFL Speaking Practice Session', 'Live practice session for speaking tasks with feedback', '2025-01-20 14:00:00+00', '2025-01-20 15:30:00+00', '650e8400-e29b-41d4-a716-446655440020', '650e8400-e29b-41d4-a716-446655440011', 'class', 'https://zoom.us/j/123456789'),
  ('650e8400-e29b-41d4-a716-446655440131', 'Public Speaking Workshop', 'Interactive workshop on presentation skills', '2025-01-22 16:00:00+00', '2025-01-22 17:30:00+00', '650e8400-e29b-41d4-a716-446655440022', '650e8400-e29b-41d4-a716-446655440013', 'class', 'https://zoom.us/j/987654321')
ON CONFLICT (id) DO NOTHING;

-- Update course statistics (only for courses that exist)
UPDATE courses SET total_enrollments = (
  SELECT COUNT(*) FROM enrollments WHERE course_id = courses.id
) WHERE id IN (
  '650e8400-e29b-41d4-a716-446655440020',
  '650e8400-e29b-41d4-a716-446655440021',
  '650e8400-e29b-41d4-a716-446655440022',
  '650e8400-e29b-41d4-a716-446655440023',
  '650e8400-e29b-41d4-a716-446655440024'
);