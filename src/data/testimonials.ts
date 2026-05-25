import varsha from "@/assets/testimonials/varsha.jpg";
import raunkaq from "@/assets/testimonials/raunkaq.jpg";
import ahishek from "@/assets/testimonials/ahishek.jpg";
import rahul from "@/assets/testimonials/rahul.jpg";
import shivendra from "@/assets/testimonials/shivendra.jpg";
import manish from "@/assets/testimonials/manish.jpg";
import pranav from "@/assets/testimonials/pranav.jpg";
import ujjwala from "@/assets/testimonials/ujjwala.jpg";
import venkatesh from "@/assets/testimonials/venkatesh.jpg";
import deepak from "@/assets/testimonials/deepak.jpg";
import tanmay from "@/assets/testimonials/tanmay.jpg";
import mayank from "@/assets/testimonials/mayank.jpg";
import faheem from "@/assets/testimonials/faheem.jpg";
import sankalp from "@/assets/testimonials/sankalp.jpg";
import harshita from "@/assets/testimonials/harshita.jpg";
import aditi from "@/assets/testimonials/aditi.jpg";
import dushyant from "@/assets/testimonials/dushyant.jpg";
import devesh from "@/assets/testimonials/devesh.jpg";
import deepti from "@/assets/testimonials/deepti.jpg";
import prakhar from "@/assets/testimonials/prakhar.jpg";

export type Testimonial = {
  name: string;
  avatar?: string;
  rating: number;
  review: string;
};

export const testimonials: Testimonial[] = [
  { name: "Varsha", avatar: varsha, rating: 4, review: "Joining Upskiller Academy was a great decision. Prabjot Ma'am is a fantastic mentor, and the institute provides comprehensive stock market training. Friendly trainers clear all doubts, and students can earn money during the training. Highly recommend for becoming knowledgeable and self-sufficient in the stock market." },
  { name: "Raunkaq Oberoi", avatar: raunkaq, rating: 4, review: "Upskiller Academy stands out for its well-structured modules tailored to students' needs. Prabjot Ma'am is an exceptional mentor, always available to address doubts instantly. Live chart sessions made technical concepts clear. Overall, a great learning experience and a valuable journey in the share market." },
  { name: "Abhishek Gautam", avatar: ahishek, rating: 4, review: "I recently got selected at Ken Research, thanks to the exceptional mentorship from Prabjot Ma'am and Nisarg sir. Their guidance boosted my confidence and helped me clear each interview round. I highly recommend Upskiller Academy to graduates seeking jobs in financial and market research." },
  { name: "Rahul Madhiyan", avatar: rahul, rating: 4, review: "I recently got selected at Ken Research, fulfilling my dream to become a Financial Analyst. The affordable Professional Certification and outstanding placement support helped me achieve this without a CFA. Special thanks to Prabjot Ma'am and Nisarg sir for their exceptional mentorship." },
  { name: "Shivendra Pratap Singh", avatar: shivendra, rating: 4, review: "I had a great experience at Upskiller Academy. The CFMRA course, along with the support from Prabjot Ma'am, boosted my confidence and led to a 3-4 lac package in the analytics industry. The live classes, trading sessions, and mock interviews were invaluable." },
  { name: "Manish Verma", avatar: manish, rating: 4, review: "I'm a CFMRA student at Upskiller Academy and have already made significant profits. The comprehensive approach covers technical, fundamental analysis, and market research. Special thanks to Prabjot Ma'am for her invaluable guidance — highly recommend for anyone looking to build a career in the stock market." },
  { name: "Pranav Joshi (CTFA)", avatar: pranav, rating: 4, review: "After taking many technical analysis courses, Upskiller Academy stood out. In one month, I doubled my investment using their strategies. They offer live classes, unlimited doubt-solving sessions, and comprehensive coverage of technical and fundamental analysis, plus job placements in analyst roles." },
  { name: "Ujjwala Rajput", avatar: ujjwala, rating: 4, review: "Highly recommended for stock market careers. I started with zero knowledge and now feel well-prepared. The supportive faculty, especially Prabjot Ma'am, provided individual attention and deep explanations. Upskiller Academy helped me grow both financially and psychologically." },
  { name: "Venkatesh", avatar: venkatesh, rating: 4, review: "A 56-year-old Finance Manager from Navi Mumbai — despite initial doubts, I found the teaching by Ms. Prabjot exceptional, clearing all my doubts and providing practical market application. I appreciate her patience, new ideas, and the supportive team. Highly recommended." },
  { name: "Deepak Upadhyay", avatar: deepak, rating: 4, review: "It's been a wonderful decision to join Upskiller Academy for me. I have earned and paid the entire fee through the same strategies which I learned during the training itself." },
  { name: "Farhan Nasiim", rating: 4, review: "After seven years as a NEET aspirant, I joined Upskiller Academy — the best decision of my life. The CFMRA program transformed my knowledge and confidence in stock trading. Special thanks to Prabjot Ma'am for her dedication — helped me grow both educationally and psychologically." },
  { name: "Tanmay Singh Vishen", avatar: tanmay, rating: 4, review: "I learned a lot in just 4 days despite my non-finance background. Prabjot Ma'am's guidance was invaluable, offering excellent programs in technical and fundamental analysis. The unique approach and live classes surpassed all other institutes. Highly recommend for a successful stock market career." },
  { name: "Vandana Arora", rating: 4, review: "Upskiller Academy is unparalleled. After taking a demo class, I felt confident and supported by Prabjot Ma'am, who ensures every student understands deeply. Unique courses in technical and fundamental analysis, with daily assessments and 24/7 support. Highly recommend for stock market education." },
  { name: "Mayank Mishra", avatar: mayank, rating: 4, review: "The best financial institution in India. I highly recommend it to anyone interested in finance and the stock market. The faculty, especially Prabjot Ma'am, is excellent and provides in-depth understanding. Being part of Upskiller Academy has been a wonderful experience." },
  { name: "Faheem Ali", avatar: faheem, rating: 4, review: "Highly recommend Upskiller Academy for exploring skills in finance and stock market. Prabjot Ma'am, with over 10 years of experience, teaches with real-time examples and market conditions. The detailed course content and engaging sessions have been invaluable." },
  { name: "Sankalp Saxena", avatar: sankalp, rating: 4, review: "Excellent teaching method with practical examples. The only institute which focuses on doubt solving as many times in class so each and everyone understands the concept very well. Whether fresher or experienced trader you can come here to learn trading in a new way." },
  { name: "Harshita Pandey", avatar: harshita, rating: 4, review: "The best job-guaranteed platform for graduates, focusing on skill upgrades through live projects and real training experiences. They offer perfect CVs and cover letters, comprehensive preparation, and unlimited interview support — a unique and dominant player in the industry." },
  { name: "Sonam Kukreja", rating: 4, review: "I enrolled in the CFMRA program at Upskiller Academy and am highly satisfied. The dedicated teachers provide real-time support and live trading experiences, helping students start earning in just 20-25 days. Comprehensive training, job placements, and skill development make it preferable to a master's degree." },
  { name: "Aditi", avatar: aditi, rating: 4, review: "After taking various technical analysis courses, Upskiller Academy stood out. In one month, I doubled my investment using their strategies. Live, interactive classes with unlimited doubt-solving sessions cover technical and fundamental analysis, with placements in roles like Technical Analyst and Research Analyst." },
  { name: "Suyash Khare", rating: 4, review: "After graduation, I was stuck due to COVID-19 but realized the importance of financial skills and multiple income sources. Upskiller Academy transformed my life with in-depth teaching, unlimited doubt-solving sessions, and benchmark services. Highly recommend for internships and jobs in top consulting and investment banking firms." },
  { name: "Dushyant Sharma", avatar: dushyant, rating: 4, review: "As a businessman, I joined Upskiller Academy to learn about financial markets. The feel-free approach allowed unlimited class attendance and doubt-solving. Prabjot Ma'am's expertise made complex concepts easy. The high-paying strategies helped me earn well during the course. I'm grateful for their dedication." },
  { name: "Devesh", avatar: devesh, rating: 4, review: "A top Indian institute offering comprehensive financial market education. Their CFMRA program covers technical and fundamental analysis, leading to significant investment growth. The program includes intraday, swing, and positional trades, plus options strategies — round-the-clock mentoring for top financial careers." },
  { name: "Deepti", avatar: deepti, rating: 4, review: "A CFMRA student at Upskiller Academy — my experience has been outstanding, with significant profit gains in just one month. Covers both technical and fundamental analysis. Special thanks to Prabjot Ma'am and Gargi Ma'am for their guidance. Highly recommend for a stock market career." },
  { name: "Prakhar Yadav", avatar: prakhar, rating: 4, review: "I completed the CFMRA program at Upskiller Academy, which transformed me from a complete fresher to a skilled technical analyst. Under Prabjot Ma'am's guidance, I achieved 85-90% accuracy in stock trading and secured a dream job at an international MNC. Invaluable for my career." },
];
