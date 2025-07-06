import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface User {
  id: string;
  auth_id?: string;
  email: string;
  first_name: string;
  last_name: string;
  role: 'admin' | 'instructor' | 'student';
  avatar_url?: string;
  phone?: string;
  bio?: string;
  date_of_birth?: string;
  address?: any;
  is_active: boolean;
  last_login?: string;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  color?: string;
  is_active: boolean;
  created_at: string;
}

export interface Course {
  id: string;
  title: string;
  description?: string;
  short_description?: string;
  category_id?: string;
  instructor_id: string;
  thumbnail_url?: string;
  price: number;
  duration_weeks?: number;
  difficulty_level?: 'beginner' | 'intermediate' | 'advanced';
  max_students?: number;
  prerequisites?: string[];
  learning_objectives?: string[];
  is_published: boolean;
  is_featured: boolean;
  rating: number;
  total_reviews: number;
  total_enrollments: number;
  created_at: string;
  updated_at: string;
  // Relations
  category?: Category;
  instructor?: User;
  lessons?: Lesson[];
}

export interface Lesson {
  id: string;
  course_id: string;
  title: string;
  description?: string;
  content?: string;
  video_url?: string;
  duration_minutes?: number;
  order_index: number;
  is_preview: boolean;
  resources?: any[];
  created_at: string;
  updated_at: string;
}

export interface Enrollment {
  id: string;
  student_id: string;
  course_id: string;
  status: 'active' | 'completed' | 'dropped' | 'pending';
  enrolled_at: string;
  completed_at?: string;
  progress_percentage: number;
  last_accessed?: string;
  certificate_issued: boolean;
  // Relations
  student?: User;
  course?: Course;
}

export interface Progress {
  id: string;
  student_id: string;
  lesson_id: string;
  course_id: string;
  is_completed: boolean;
  time_spent_minutes: number;
  last_position: number;
  completed_at?: string;
  created_at: string;
  updated_at: string;
  // Relations
  lesson?: Lesson;
}

export interface Assignment {
  id: string;
  course_id: string;
  lesson_id?: string;
  title: string;
  description?: string;
  instructions?: string;
  type: 'quiz' | 'essay' | 'project' | 'presentation' | 'practice_test';
  max_points: number;
  due_date?: string;
  is_published: boolean;
  allow_late_submission: boolean;
  late_penalty_percentage: number;
  resources?: any[];
  created_at: string;
  updated_at: string;
}

export interface Submission {
  id: string;
  assignment_id: string;
  student_id: string;
  content?: string;
  file_urls?: string[];
  status: 'draft' | 'submitted' | 'graded' | 'returned';
  submitted_at?: string;
  graded_at?: string;
  created_at: string;
  updated_at: string;
  // Relations
  assignment?: Assignment;
  student?: User;
  grade?: Grade;
}

export interface Grade {
  id: string;
  submission_id: string;
  grader_id: string;
  points_earned?: number;
  max_points?: number;
  percentage?: number;
  letter_grade?: string;
  feedback?: string;
  rubric_scores?: any;
  is_final: boolean;
  graded_at: string;
  created_at: string;
  // Relations
  grader?: User;
}

export interface Certificate {
  id: string;
  student_id: string;
  course_id: string;
  certificate_number: string;
  issued_date: string;
  expiry_date?: string;
  certificate_url?: string;
  verification_code: string;
  is_valid: boolean;
  created_at: string;
  // Relations
  student?: User;
  course?: Course;
}

export interface Message {
  id: string;
  sender_id: string;
  recipient_id: string;
  subject?: string;
  content: string;
  is_read: boolean;
  parent_message_id?: string;
  course_id?: string;
  sent_at: string;
  read_at?: string;
  // Relations
  sender?: User;
  recipient?: User;
  course?: Course;
}

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: 'course' | 'assignment' | 'grade' | 'message' | 'system';
  is_read: boolean;
  action_url?: string;
  metadata?: any;
  created_at: string;
  read_at?: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  start_time: string;
  end_time: string;
  course_id?: string;
  instructor_id?: string;
  event_type?: 'class' | 'assignment_due' | 'exam' | 'office_hours' | 'holiday';
  location?: string;
  meeting_url?: string;
  is_recurring: boolean;
  recurrence_pattern?: any;
  attendees?: string[];
  created_at: string;
  // Relations
  course?: Course;
  instructor?: User;
}

export interface Review {
  id: string;
  course_id: string;
  student_id: string;
  rating: number;
  review_text?: string;
  is_published: boolean;
  helpful_count: number;
  created_at: string;
  updated_at: string;
  // Relations
  course?: Course;
  student?: User;
}

// API helper functions
export const api = {
  // Users
  async getUsers() {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data as User[];
  },

  async getUserById(id: string) {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data as User;
  },

  // Courses
  async getCourses(includeUnpublished = false) {
    let query = supabase
      .from('courses')
      .select(`
        *,
        category:categories(*),
        instructor:users(*)
      `)
      .order('created_at', { ascending: false });

    if (!includeUnpublished) {
      query = query.eq('is_published', true);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data as Course[];
  },

  async getCourseById(id: string) {
    const { data, error } = await supabase
      .from('courses')
      .select(`
        *,
        category:categories(*),
        instructor:users(*),
        lessons(*)
      `)
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data as Course;
  },

  // Enrollments
  async getEnrollmentsByStudent(studentId: string) {
    const { data, error } = await supabase
      .from('enrollments')
      .select(`
        *,
        course:courses(
          *,
          instructor:users(*)
        )
      `)
      .eq('student_id', studentId)
      .order('enrolled_at', { ascending: false });
    
    if (error) throw error;
    return data as Enrollment[];
  },

  async getEnrollmentsByCourse(courseId: string) {
    const { data, error } = await supabase
      .from('enrollments')
      .select(`
        *,
        student:users(*)
      `)
      .eq('course_id', courseId)
      .order('enrolled_at', { ascending: false });
    
    if (error) throw error;
    return data as Enrollment[];
  },

  // Progress
  async getProgressByStudent(studentId: string, courseId?: string) {
    let query = supabase
      .from('progress')
      .select(`
        *,
        lesson:lessons(*)
      `)
      .eq('student_id', studentId);

    if (courseId) {
      query = query.eq('course_id', courseId);
    }

    const { data, error } = await query.order('created_at', { ascending: false });
    if (error) throw error;
    return data as Progress[];
  },

  // Messages
  async getMessagesByUser(userId: string) {
    const { data, error } = await supabase
      .from('messages')
      .select(`
        *,
        sender:users!messages_sender_id_fkey(*),
        recipient:users!messages_recipient_id_fkey(*)
      `)
      .or(`sender_id.eq.${userId},recipient_id.eq.${userId}`)
      .order('sent_at', { ascending: false });
    
    if (error) throw error;
    return data as Message[];
  },

  // Notifications
  async getNotificationsByUser(userId: string) {
    const { data, error } = await supabase
      .from('notifications')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data as Notification[];
  },

  async markNotificationAsRead(notificationId: string) {
    const { error } = await supabase
      .from('notifications')
      .update({ is_read: true, read_at: new Date().toISOString() })
      .eq('id', notificationId);
    
    if (error) throw error;
  },

  // Assignments
  async getAssignmentsByCourse(courseId: string) {
    const { data, error } = await supabase
      .from('assignments')
      .select('*')
      .eq('course_id', courseId)
      .eq('is_published', true)
      .order('due_date', { ascending: true });
    
    if (error) throw error;
    return data as Assignment[];
  },

  // Submissions
  async getSubmissionsByStudent(studentId: string) {
    const { data, error } = await supabase
      .from('submissions')
      .select(`
        *,
        assignment:assignments(*),
        grade:grades(*)
      `)
      .eq('student_id', studentId)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data as Submission[];
  },

  // Certificates
  async getCertificatesByStudent(studentId: string) {
    const { data, error } = await supabase
      .from('certificates')
      .select(`
        *,
        course:courses(*)
      `)
      .eq('student_id', studentId)
      .order('issued_date', { ascending: false });
    
    if (error) throw error;
    return data as Certificate[];
  },

  // Calendar Events
  async getCalendarEvents(startDate?: string, endDate?: string) {
    let query = supabase
      .from('calendar_events')
      .select(`
        *,
        course:courses(*),
        instructor:users(*)
      `)
      .order('start_time', { ascending: true });

    if (startDate) {
      query = query.gte('start_time', startDate);
    }
    if (endDate) {
      query = query.lte('end_time', endDate);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data as CalendarEvent[];
  }
};