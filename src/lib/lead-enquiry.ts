export const LEAD_ENQUIRY_EVENT = "ua:lead-enquiry";

export const openCourseEnquiry = (course: string) => {
  window.dispatchEvent(new CustomEvent(LEAD_ENQUIRY_EVENT, { detail: { course } }));
};