import type { Dispatch, SetStateAction } from 'react';
import { styles } from '../styles';
import { PROFESSORS, DEPARTMENTS, EXAM_SCHEDULE } from '../data';
import type { Strings, FacultyTab, Professor } from '../types';

interface FacultyScreenProps {
  strings: Strings;
  facultyTab: FacultyTab;
  setFacultyTab: Dispatch<SetStateAction<FacultyTab>>;
  selectedDept: string | null;
  setSelectedDept: Dispatch<SetStateAction<string | null>>;
  selectedProf: Professor | null;
  setSelectedProf: Dispatch<SetStateAction<Professor | null>>;
}

// "Fakülte Hakkında" ekranı — 2 sekme: Personel (bölüm bölüm gezinme), Sınav Programı.
// Personel sekmesi: önce bölüm listesi gösterilir, bir bölüme tıklanınca o bölümün
// akademisyen listesi açılır, bir akademisyene tıklanınca da kısa bir detay kartı açılır.
// selectedDept/selectedProf App.tsx'te tutuluyor ki ekranın altındaki tek "Geri" butonu
// hem bölüm seçiliyken bölüm listesine, hem bölüm listesindeyken ana menüye dönebilsin.
export default function FacultyScreen({
  strings,
  facultyTab,
  setFacultyTab,
  selectedDept,
  setSelectedDept,
  selectedProf,
  setSelectedProf,
}: FacultyScreenProps) {
  return (
    <div style={styles.findWrap}>
      <div style={styles.tabRow}>
        {(['staff', 'exam'] as FacultyTab[]).map((tab) => (
          <button
            key={tab}
            style={{ ...styles.tabBtn, ...(facultyTab === tab ? styles.tabBtnActive : {}) }}
            onClick={() => {
              setFacultyTab(tab);
              setSelectedDept(null);
              setSelectedProf(null);
            }}
          >
            {tab === 'staff' ? strings.tabStaff : strings.tabExam}
          </button>
        ))}
      </div>

      {facultyTab === 'staff' && (
        <div style={styles.facultyListSection}>
          {!selectedDept && (
            <div style={styles.facultyListFill}>
              {DEPARTMENTS.map((dept) => (
                <button key={dept} style={styles.profRow} onClick={() => setSelectedDept(dept)}>
                  <span style={styles.profName}>{dept}</span>
                </button>
              ))}
            </div>
          )}

          {selectedDept && (() => {
            const deptProfs = PROFESSORS.filter((p) => p.department === selectedDept);
            const groups = [...new Set(deptProfs.map((p) => p.group).filter((g): g is string => Boolean(g)))];

            const renderProf = (p: Professor) => (
              <div key={p.id} style={{ width: '100%' }}>
                <button
                  style={styles.profRow}
                  onClick={() => setSelectedProf(selectedProf?.id === p.id ? null : p)}
                >
                  <span style={styles.profName}>{p.name}</span>
                </button>
                {selectedProf?.id === p.id && (
                  <div style={styles.profDetail}>
                    <p style={styles.profDetailInfo}>
                      {p.department}
                      {p.group ? ` · ${p.group}` : ''}
                    </p>
                    {(p.phone || p.email) && (
                      <p style={styles.profDetailInfo}>
                        {[p.phone, p.email].filter(Boolean).join(' · ')}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );

            return (
              <div style={styles.facultyListFill}>
                {groups.length === 0
                  ? deptProfs.map(renderProf)
                  : groups.map((g) => (
                      <div key={g} style={{ width: '100%' }}>
                        <p style={styles.aboutSectionTitle}>{g}</p>
                        {deptProfs.filter((p) => p.group === g).map(renderProf)}
                      </div>
                    ))}
              </div>
            );
          })()}
        </div>
      )}

      {facultyTab === 'exam' && (
        <>
          <p style={styles.aboutSectionTitle}>{strings.examDemoNote}</p>
          <table style={styles.examTable}>
            <thead>
              <tr>
                <th style={styles.examTh}>{strings.examCourse}</th>
                <th style={styles.examTh}>{strings.examDate}</th>
                <th style={styles.examTh}>{strings.examTime}</th>
                <th style={styles.examTh}>{strings.examRoom}</th>
              </tr>
            </thead>
            <tbody>
              {EXAM_SCHEDULE.map((row) => (
                <tr key={row.id}>
                  <td style={styles.examTd}>{row.course}</td>
                  <td style={styles.examTd}>{row.date}</td>
                  <td style={styles.examTd}>{row.time}</td>
                  <td style={styles.examTd}>{row.room}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
