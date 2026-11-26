/*
 * PROTOTYPE COPY FILE — every word shown on the UI STAR student home lives here.
 *
 *   1. Edit any text below (inside the quotes).
 *   2. Save, then refresh the browser tab (F5). Nothing else to rebuild.
 *
 * Rules of thumb:
 *   - {name}, {n}, {total} ... are placeholders the page fills in. Keep them, move them around freely.
 *   - Strings marked "(screen reader)" are not visible on screen; they are read aloud / used as tooltips.
 *   - Dates: assignments use ISO form  "YYYY-MM-DDTHH:mm"  (Gregorian year; the page shows it as พ.ศ.).
 */
window.COPY = {

  // ── Browser tab title ────────────────────────────────────────────────
  pageTitle: 'STAR หน้าแรก — Prototype',

  // ── Student ──────────────────────────────────────────────────────────
  userName: 'พิมพ์ชนก',
  userInitials: 'พจ',

  // ── Top bar ──────────────────────────────────────────────────────────
  menuButton: 'เปิดเมนู',                   // (screen reader)
  menuClose: 'ปิดเมนู',                     // (screen reader) mobile drawer close button
  help: 'ช่วยเหลือ',                        // mobile drawer footer item
  fontSizeGroup: 'ขนาดตัวอักษร',             // (screen reader)
  fontSizeGlyph: 'ก',                        // the sample letter on the 3 size buttons
  notifications: 'การแจ้งเตือน',             // (screen reader)
  account: 'บัญชีของฉัน',                    // (screen reader)
  loaderText: 'Loading...',                  // text under the rocket on the page-change loader
  coinLabel: 'Starcoin',
  coinReward: 2,                             // Starcoin shown in the floating "+n"
  coinPlus: '+{n}',                          // floating "+n" when a reward is collected
  coinChipAria: 'Starcoin {n} เหรียญ',       // (screen reader)

  // ── Left menu ────────────────────────────────────────────────────────
  navLabel: 'เมนูหลัก',                      // (screen reader)
  nav: {
    home: 'หน้าหลัก',
    courses: 'คอร์สเรียน',
    classroom: 'ห้องเรียน',
    exercises: 'แบบฝึกหัด',
    summary: 'สรุปความรู้',
  },

  // Where each menu item goes. Empty '' = no page designed yet (item is greyed out + shows navSoon).
  // Add a page: create the html file, then put its filename here.
  navLinks: {
    home: 'index.html',
    courses: 'courses.html',
    classroom: '',
    exercises: '',
    summary: '',
  },
  navSoon: 'ยังไม่มีหน้านี้ในต้นแบบ',          // hover text for items with no page

  // ── Blue hero banner ─────────────────────────────────────────────────
  greeting: 'สวัสดี พิมพ์ชนก · นักบินอวกาศพร้อมออกเดินทางแล้ว!',
  headline: 'อีกแค่ 1 ชุด ดาวของคุณจะสว่างต่อเป็นวันที่ 13!',
  startButton: 'เริ่มทำแบบฝึก',
  astronautAria: 'ภาพนักบินอวกาศลอยตัวกลางอวกาศ', // (screen reader)

  // ── Assignments ──────────────────────────────────────────────────────
  assignTitle: 'งานที่ได้รับมอบหมาย',
  filterPrefix: 'ตัวกรอง:',
  filterPlaceholder: 'กลุ่มสาระฯ',            // filter button text
  filterButtonAria: 'ตัวกรองกลุ่มสาระฯ',       // (screen reader)
  filterCountAria: ' เลือกอยู่ {n} กลุ่ม',      // (screen reader) added to the line above when some are ticked
  filterTitle: 'ตัวกรอง',                      // filter dialog
  filterSub: 'กลุ่มสาระการเรียนรู้',
  filterClose: 'ปิด',                          // (screen reader)
  filterClear: 'ล้างค่าทั้งหมด',
  filterCancel: 'ยกเลิก',
  filterApply: 'เลือกตัวกรอง',
  emptyTitle: 'ไม่มีงานที่ต้องทำ',
  emptyText: 'ลองเลือกวิชาอื่นหรือดูแท็บอื่น',
  dueDateSr: 'วันที่ส่ง',                    // (screen reader)
  dueTimeSr: 'เวลาส่ง',                      // (screen reader)
  timeSuffix: ' น.',                          // "16:00 น."
  progressUnit: 'ข้อ',                        // "3 / 8 ข้อ"
  cardButton: 'ทำงานมอบหมาย',
  weekdaysShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
  monthsShort: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],

  // the filter dialog's tiles (icon = SVG path)
  subjectGroups: [
    { label: 'ภาษาไทย', icon: 'M7 5h18a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM10 19v-6a3 3 0 0 1 6 0v6M16 15h6v4a2 2 0 0 1-4 0' },
    { label: 'คณิตศาสตร์', icon: 'M8 10h6M8 15h6M8 20h6M20 8v6M17 11h6M18 18l4 4M22 18l-4 4' },
    { label: 'วิทยาศาสตร์และเทคโนโลยี', icon: 'M13 4h6M14 4v8l-7 12a2 2 0 0 0 2 3h14a2 2 0 0 0 2-3l-7-12V4M10 19h12' },
    { label: 'สังคมศึกษา ศาสนา และวัฒนธรรม', icon: 'M16 4a12 12 0 1 0 0 24a12 12 0 0 0 0-24zM6 13c4 0 5 3 8 3s2 4 5 5M19 5c-1 3 1 5 4 5s3 3 5 3' },
    { label: 'สุขศึกษาและพลศึกษา', icon: 'M16 4l10 4v7c0 6-4.5 11-10 13C10.5 26 6 21 6 15V8zM16 21l-4-4a2.6 2.6 0 0 1 4-3.3a2.6 2.6 0 0 1 4 3.3z' },
    { label: 'ศิลปะ', icon: 'M26 6a2.8 2.8 0 0 0-4 0L12 16l4 4l10-10a2.8 2.8 0 0 0 0-4zM12 16c-3 0-5 2-5 5c0 2-1 3-2 3c2 2 6 2 8 0c2-2 3-4 3-4' },
    { label: 'การงานอาชีพ', icon: 'M5 7h22v14H5zM13 21l-1 5M19 21l1 5M10 26h12' },
    { label: 'ภาษาต่างประเทศ', icon: 'M7 5h18a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM9 16l3-8l3 8M10 13h4M17 17h6l-6 6h6' },
    { label: 'อื่นๆ', icon: 'M9 16h.01M16 16h.01M23 16h.01' }
  ],

  // only state 'todo' is shown on the home page (the 4 nearest due dates)
  assignments: [
    { subject: 'คณิตศาสตร์', title: 'แบบฝึกหัดเศษส่วนและทศนิยม', due: '2026-11-20T16:00', done: 10, total: 10, state: 'done' },
    { subject: 'ภาษาไทย', title: 'อ่านจับใจความ “นิทานพื้นบ้าน”', due: '2026-11-24T23:59', done: 5, total: 5, state: 'done' },
    { subject: 'วิทยาศาสตร์และเทคโนโลยี', title: 'ใบงานการทดลองเรื่องแรงเสียดทาน', due: '2026-11-25T16:00', done: 3, total: 8, state: 'late' },
    { subject: 'ภาษาไทย', title: 'เรียงความ “ความฝันของฉัน”', due: '2026-11-30T08:30', done: 1, total: 3, state: 'todo' },
    { subject: 'คณิตศาสตร์', title: 'แบบฝึกหัดสมการเชิงเส้น ชุดที่ 2', due: '2026-11-27T16:00', done: 6, total: 10, state: 'todo' },
    { subject: 'วิทยาศาสตร์และเทคโนโลยี', title: 'สรุปบทเรียนเรื่องระบบสุริยะ', due: '2026-12-02T23:59', done: 0, total: 5, state: 'todo' },
    { subject: 'ภาษาต่างประเทศ', title: 'Vocabulary Quiz: Daily Routines', due: '2026-11-28T12:00', done: 4, total: 15, state: 'todo' },
    { subject: 'สังคมศึกษา ศาสนา และวัฒนธรรม', title: 'ใบงานหน้าที่พลเมืองในชุมชน', due: '2026-12-01T16:00', done: 0, total: 6, state: 'todo' },
    { subject: 'คณิตศาสตร์', title: 'โจทย์ปัญหาสมการ ชุดที่ 3', due: '2026-12-03T16:00', done: 0, total: 8, state: 'todo' },
    { subject: 'ศิลปะ', title: 'ร่างภาพทิวทัศน์ด้วยดินสอ', due: '2026-12-04T23:59', done: 1, total: 4, state: 'todo' },
    { subject: 'สุขศึกษาและพลศึกษา', title: 'บันทึกการออกกำลังกาย 1 สัปดาห์', due: '2026-12-06T20:00', done: 2, total: 7, state: 'todo' },
    { subject: 'การงานอาชีพ', title: 'แผนงานโครงงานปลูกผักสวนครัว', due: '2026-12-08T16:00', done: 0, total: 5, state: 'todo' }
  ],

  // ── My courses (home page) ───────────────────────────────────────────
  myCourses: {
    title: 'คอร์สของฉัน',
    all: 'ดูคอร์สทั้งหมด',
    lessons: '{n} แบบฝึกหัด',
    progress: '{done} / {lessons} บท',
    cardButton: { doing: 'ทำแบบฝึก', done: 'ทบทวน' },   // done = finished all lessons
    // cover = picture key (math, thai, sci, eng, soc, hist)
    list: [
      { cover: 'thai', subject: 'ภาษาไทย', title: 'ภาษาไทย', done: 14, lessons: 20 },
      { cover: 'math', subject: 'คณิตศาสตร์', title: 'คณิตศาสตร์', done: 9, lessons: 20 },
      { cover: 'sci', subject: 'วิทยาศาสตร์และเทคโนโลยี', title: 'วิทยาศาสตร์และเทคโนโลยี', done: 6, lessons: 18 },
      { cover: 'soc', subject: 'สังคมศึกษา ศาสนา และวัฒนธรรม', title: 'สังคมศึกษา ศาสนา และวัฒนธรรม', done: 0, lessons: 14 },
      { cover: 'eng', subject: 'ภาษาต่างประเทศ', title: 'ภาษาอังกฤษ', done: 2, lessons: 16 },
    ],
  },

  // ── Screen-reader announcements (not visible) ───────────────────────
  status: {
    filtered: 'กรองตาม {subjects}',
    filterCleared: 'แสดงงานทุกกลุ่มสาระ',
  },
};

/* ═══════════════════════════════════════════════════════════════════════
 * PAGE 2 — คอร์สเรียน (courses.html)
 * ═══════════════════════════════════════════════════════════════════════ */
window.COPY.courses = {
  pageTitle: 'STAR — คอร์สเรียน',

  // top bar
  backAria: 'ย้อนกลับไปหน้าหลัก',               // (screen reader)
  crumbsAria: 'เส้นทาง',                         // (screen reader)
  crumbHome: 'หน้าหลัก',
  crumbCourses: 'คอร์สเรียน',

  // banner
  classTag: 'ม. 2/3',                            // the little tab above the banner
  title: 'คอร์สเรียนของฉัน',
  stats: [                                       // three facts under the title
    { label: 'กลุ่มสาระฯ', value: '6 กลุ่ม', icon: 'light-bulb-idea' },
    { label: 'คอร์สเรียน', value: '6 คอร์ส', icon: 'book-open' },
    { label: 'เรียนจบแล้ว', value: '1 คอร์ส', icon: 'checkmark-done-check-circle' },
  ],
  continueButton: 'เรียนต่อ',

  // filter tabs (the counts are filled in automatically)
  listAria: 'รายการคอร์สเรียน',                  // (screen reader)
  tabsAria: 'กรองคอร์สตามสถานะ',                 // (screen reader)
  tabs: { all: 'คอร์สทั้งหมด', doing: 'กำลังเรียน', new: 'ยังไม่เริ่ม', done: 'เรียนจบแล้ว' },

  // course card
  gradeTag: 'ม.2',                               // big tag on the cover corner
  subjectLine: '{subject} • ภาคเรียนที่ 2',
  lessons: '{n} บทเรียน',
  progressLabel: '{done} / {lessons} บท',
  progressNew: 'ยังไม่เริ่ม',
  menuAria: 'ตัวเลือกเพิ่มเติมของ {title}',      // (screen reader) the "…" button
  cardButton: { doing: 'ทำแบบฝึก', new: 'เริ่มเรียน', done: 'ทบทวน' },

  // nothing matches
  emptyTitle: 'ไม่พบคอร์สที่ตรงกับตัวกรอง',
  emptyText: 'ลองเปลี่ยนวิชาหรือสถานะ หรือค้นหาด้วยคำอื่น',
  clearFilters: 'ล้างตัวกรอง',

  // screen-reader announcements (not visible)
  status: {
    showAll: 'แสดงคอร์สทั้งหมด',
    showDoing: 'แสดงคอร์สที่กำลังเรียน',
    showNew: 'แสดงคอร์สที่ยังไม่เริ่ม',
    showDone: 'แสดงคอร์สที่เรียนจบแล้ว',
    cleared: 'ล้างตัวกรองแล้ว',
  },

  // cover = picture key (math, thai, sci, eng, soc, hist). done/lessons drive progress + status:
  //   done = 0 → "ยังไม่เริ่ม" · done >= lessons → "เรียนจบแล้ว" · else "กำลังเรียน".  last = recency (bigger = more recent)
  list: [
    { cover: 'math', subject: 'คณิตศาสตร์', title: 'คณิตศาสตร์ ม.2 เล่ม 2', done: 9, lessons: 20, last: 6 },
    { cover: 'thai', subject: 'ภาษาไทย', title: 'ภาษาไทย ม.2 หลักภาษาและการใช้ภาษา', done: 14, lessons: 20, last: 5 },
    { cover: 'sci', subject: 'วิทยาศาสตร์', title: 'วิทยาศาสตร์ ม.2 เล่ม 2', done: 6, lessons: 18, last: 4 },
    { cover: 'eng', subject: 'ภาษาอังกฤษ', title: 'English for Grade 8: Everyday Conversation', done: 2, lessons: 16, last: 2 },
    { cover: 'soc', subject: 'สังคมศึกษา', title: 'สังคมศึกษา ม.2 พลเมืองและเศรษฐศาสตร์', done: 0, lessons: 14, last: 0 },
    { cover: 'hist', subject: 'ประวัติศาสตร์', title: 'ประวัติศาสตร์ไทยสมัยอยุธยา', done: 12, lessons: 12, last: 1 },
  ],
};

document.title = window.COPY.pageTitle;
