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
  fontSizeGroup: 'ขนาดตัวอักษร',             // (screen reader)
  fontSizeGlyph: 'ก',                        // the sample letter on the 3 size buttons
  notifications: 'การแจ้งเตือน',             // (screen reader)
  account: 'บัญชีของฉัน',                    // (screen reader)
  loaderText: 'Loading...',                  // text under the rocket on the page-change loader
  coinLabel: 'Starcoin',
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
  greeting: 'สวัสดี {name} · นักบินอวกาศพร้อมออกเดินทางแล้ว!',
  headline: 'อีกแค่ 1 ชุด ดาวของคุณจะสว่างต่อเป็นวันที่ 13!',
  startButton: 'เริ่มทำแบบฝึก',
  astronautAria: 'ภาพนักบินอวกาศลอยตัวกลางอวกาศ', // (screen reader)

  // ── Streak card (inside the banner) ─────────────────────────────────
  streakStarAria: 'ดาวต่อเนื่อง 12 วัน แตะเพื่อให้ดาวเปล่งแสง', // (screen reader)
  streakTitle: 'ทำแบบฝึกหัดต่อเนื่อง',
  streakNumber: '12',
  streakUnit: 'วัน',
  streakHint: 'อีก 4 วันทำลายสถิติ',

  // ── Weekly login stamps ──────────────────────────────────────────────
  weekTitle: 'การเข้าสู่ระบบสัปดาห์นี้',
  weekBadge: '{n}/7 วัน',
  weekBadgeAria: 'ได้ {n} จาก 7 วัน',          // (screen reader)
  weekDays: ['จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.', 'อา.'],
  weekToday: 'วันนี้',
  stampTodayAria: 'บันทึกการเข้าสู่ระบบวันนี้',  // (screen reader) the dashed "today" button
  giftBadge: '+10',                            // bonus on day 7
  daySrStamped: 'ปั๊มแล้ว',                    // (screen reader)
  daySrToday: 'ยังไม่ได้ปั๊ม',                 // (screen reader)
  daySrGift: 'รางวัล 10 Starcoin',             // (screen reader)
  daySrFuture: 'ยังไม่ถึง',                    // (screen reader)

  // ── Missions ─────────────────────────────────────────────────────────
  missionsTitle: 'ภารกิจของฉัน',
  progressAria: 'ความคืบหน้า',                 // (screen reader)
  missionButton: 'ทำภารกิจนี้',
  newTag: 'ใหม่',

  // Card 1 — the one you can claim a reward on
  // reward = number of Starcoin paid out (the coin counter, the "+n" and the number of flying coins all follow it)
  mission1: { title: 'ส่งแบบฝึกหัดตรงเวลา 1 ชุด', timeLeft: 'เหลือเวลาอีก 4 วัน', badge: '1/1', reward: 2 },
  claimCoinAria: 'แตะเพื่อรับ {n} Starcoin',   // (screen reader) the coin button
  claimButton: 'รับรางวัล',
  claiming: 'กำลังรับ…',
  missionDone: 'ภารกิจสำเร็จแล้ว',
  claimedStub: 'รับแล้ว',

  // Card that slides in after claiming
  missionNew: { title: 'อ่านสรุปความรู้ 2 เรื่อง', timeLeft: 'เหลือเวลาอีก 4 วัน', badge: '0/2', reward: '4' },

  // Cards 2 and 3
  // badge is "done/total" - the progress bar and the badge colour are worked out from it
  mission2: { title: 'เข้าใช้งาน STAR อย่างน้อย 3 วัน/สัปดาห์', timeLeft: 'เหลือเวลาอีก 4 วัน', badge: '2/3', reward: 2 },
  mission3: { title: 'ดูสื่อในคลังสรุปความรู้ 1 ชิ้น', timeLeft: 'เหลือเวลาอีก 4 วัน', badge: '0/1', reward: 1 },

  // ── Assignments ──────────────────────────────────────────────────────
  assignTitle: 'งานที่ได้รับมอบหมาย',
  filterPrefix: 'ตัวกรอง:',
  filterPlaceholder: 'กลุ่มสาระฯ',            // button text while "all" is selected
  filterListAria: 'กลุ่มสาระฯ',               // (screen reader)
  filterButtonAria: 'ตัวกรองกลุ่มสาระฯ: {value}', // (screen reader)
  filterAllMenu: 'ทุกกลุ่มสาระฯ',             // first menu option
  tabsAria: 'สถานะงานมอบหมาย',                // (screen reader)
  tabs: { todo: 'งานที่ต้องทำ', late: 'เลยกำหนด', done: 'ส่งแล้ว' },
  empty: {
    todo: { title: 'ไม่มีงานที่ต้องทำ', text: 'ลองเลือกวิชาอื่นหรือดูแท็บอื่น' },
    late: { title: 'ไม่มีงานที่เลยกำหนด', text: 'เยี่ยมมาก ส่งงานตรงเวลาทุกชิ้น' },
    done: { title: 'ยังไม่มีงานที่ส่งแล้ว', text: 'ลองเลือกวิชาอื่นหรือดูแท็บอื่น' },
  },
  dueDateSr: 'วันที่ส่ง',                    // (screen reader)
  dueTimeSr: 'เวลาส่ง',                      // (screen reader)
  timeSuffix: ' น.',                          // "16:00 น."
  progressUnit: 'ข้อ',                        // "3 / 8 ข้อ"
  cardButton: { todo: 'ทำงานมอบหมาย', late: 'ส่งงานล่าช้า', done: 'ดูงานมอบหมาย' },
  weekdaysShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
  monthsShort: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],

  // state: todo = ต้องทำ, late = เลยกำหนด, done = ส่งแล้ว
  assignments: [
    { subject: 'คณิตศาสตร์', title: 'แบบฝึกหัดเศษส่วนและทศนิยม', due: '2026-11-20T16:00', done: 10, total: 10, state: 'done' },
    { subject: 'ภาษาไทย', title: 'อ่านจับใจความ “นิทานพื้นบ้าน”', due: '2026-11-24T23:59', done: 5, total: 5, state: 'done' },
    { subject: 'วิทยาศาสตร์และเทคโนโลยี', title: 'ใบงานการทดลองเรื่องแรงเสียดทาน', due: '2026-11-25T16:00', done: 3, total: 8, state: 'late' },
    { subject: 'ภาษาไทย', title: 'เรียงความ “ความฝันของฉัน”', due: '2026-11-30T08:30', done: 1, total: 3, state: 'todo' },
    { subject: 'คณิตศาสตร์', title: 'แบบฝึกหัดสมการเชิงเส้น ชุดที่ 2', due: '2026-11-27T16:00', done: 6, total: 10, state: 'todo' },
    { subject: 'วิทยาศาสตร์และเทคโนโลยี', title: 'สรุปบทเรียนเรื่องระบบสุริยะ', due: '2026-12-02T23:59', done: 0, total: 5, state: 'todo' },
  ],

  // ── Screen-reader announcements (not visible) ───────────────────────
  status: {
    stamped: 'บันทึกการเข้าสู่ระบบวันนี้แล้ว รวม {n} จาก 7 วัน',
    claiming: 'กำลังรับ Starcoin',
    claimed: 'ได้รับ {n} Starcoin รวม {total} Starcoin',
    missionDone: 'ภารกิจสำเร็จแล้ว {next}',
    nextNew: 'มีภารกิจใหม่เข้ามา 1 ภารกิจ',
    nextLeft: 'เหลือภารกิจที่กำลังทำอีก 2 ภารกิจ',
    showTab: 'แสดง{tab}',
    showAllSubjects: 'แสดงงานมอบหมายทุกวิชา',
    showSubject: 'แสดงงานมอบหมายวิชา{subject}',
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
  progressLabel: '{done} / {lessons} บทเรียน',
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
