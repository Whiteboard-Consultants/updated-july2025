import { useState, useEffect } from 'react';
import { api } from '../lib/supabase';
import type { User, Course, Enrollment, Progress, Message, Notification, Assignment, Submission, Certificate, CalendarEvent } from '../lib/supabase';

// Custom hooks for database operations
export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await api.getUsers();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error, refetch: () => fetchUsers() };
};

export const useCourses = (includeUnpublished = false) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const data = await api.getCourses(includeUnpublished);
        setCourses(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch courses');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [includeUnpublished]);

  return { courses, loading, error, refetch: () => fetchCourses() };
};

export const useEnrollments = (studentId?: string, courseId?: string) => {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEnrollments = async () => {
      if (!studentId && !courseId) return;

      try {
        setLoading(true);
        let data: Enrollment[];
        
        if (studentId) {
          data = await api.getEnrollmentsByStudent(studentId);
        } else if (courseId) {
          data = await api.getEnrollmentsByCourse(courseId);
        } else {
          data = [];
        }
        
        setEnrollments(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch enrollments');
      } finally {
        setLoading(false);
      }
    };

    fetchEnrollments();
  }, [studentId, courseId]);

  return { enrollments, loading, error, refetch: () => fetchEnrollments() };
};

export const useProgress = (studentId: string, courseId?: string) => {
  const [progress, setProgress] = useState<Progress[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProgress = async () => {
      if (!studentId) return;

      try {
        setLoading(true);
        const data = await api.getProgressByStudent(studentId, courseId);
        setProgress(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch progress');
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, [studentId, courseId]);

  return { progress, loading, error, refetch: () => fetchProgress() };
};

export const useMessages = (userId: string) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!userId) return;

      try {
        setLoading(true);
        const data = await api.getMessagesByUser(userId);
        setMessages(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch messages');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [userId]);

  return { messages, loading, error, refetch: () => fetchMessages() };
};

export const useNotifications = (userId: string) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      if (!userId) return;

      try {
        setLoading(true);
        const data = await api.getNotificationsByUser(userId);
        setNotifications(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch notifications');
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, [userId]);

  const markAsRead = async (notificationId: string) => {
    try {
      await api.markNotificationAsRead(notificationId);
      setNotifications(prev => 
        prev.map(notif => 
          notif.id === notificationId 
            ? { ...notif, is_read: true, read_at: new Date().toISOString() }
            : notif
        )
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to mark notification as read');
    }
  };

  return { notifications, loading, error, markAsRead, refetch: () => fetchNotifications() };
};

export const useAssignments = (courseId: string) => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAssignments = async () => {
      if (!courseId) return;

      try {
        setLoading(true);
        const data = await api.getAssignmentsByCourse(courseId);
        setAssignments(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch assignments');
      } finally {
        setLoading(false);
      }
    };

    fetchAssignments();
  }, [courseId]);

  return { assignments, loading, error, refetch: () => fetchAssignments() };
};

export const useSubmissions = (studentId: string) => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubmissions = async () => {
      if (!studentId) return;

      try {
        setLoading(true);
        const data = await api.getSubmissionsByStudent(studentId);
        setSubmissions(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch submissions');
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, [studentId]);

  return { submissions, loading, error, refetch: () => fetchSubmissions() };
};

export const useCertificates = (studentId: string) => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      if (!studentId) return;

      try {
        setLoading(true);
        const data = await api.getCertificatesByStudent(studentId);
        setCertificates(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch certificates');
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, [studentId]);

  return { certificates, loading, error, refetch: () => fetchCertificates() };
};

export const useCalendarEvents = (startDate?: string, endDate?: string) => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const data = await api.getCalendarEvents(startDate, endDate);
        setEvents(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch calendar events');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [startDate, endDate]);

  return { events, loading, error, refetch: () => fetchEvents() };
};