import { describe, it, expect } from 'vitest';
import { FACULTIES_LISANS, FACULTIES_ONLISANS, PROFESSORS, DEPARTMENTS } from '../data';

// Bu, testlerin en basit türü: bileşen render etmiyor, sadece veri şeklinin
// doğru olduğunu kontrol ediyor. "Birisi veriyi yanlış düzenlerse (örn. bir
// id'yi unutursa) bunu hemen fark et" demek için var.
describe('data.js — Fakülteler', () => {
  it('FACULTIES_LISANS içindeki her öğenin id ve name alanı olmalı', () => {
    FACULTIES_LISANS.forEach((f) => {
      expect(f).toHaveProperty('id');
      expect(f).toHaveProperty('name');
      expect(typeof f.name).toBe('string');
    });
  });

  it('FACULTIES_ONLISANS boş olmamalı', () => {
    expect(FACULTIES_ONLISANS.length).toBeGreaterThan(0);
  });

  it('aynı listede iki fakülte aynı id\'yi paylaşmamalı', () => {
    const ids = FACULTIES_LISANS.map((f) => f.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});

describe('data.js — Personel', () => {
  it('PROFESSORS içindeki her kişinin id/name/department alanı olmalı, id\'ler tekil olmalı', () => {
    const ids = new Set();
    PROFESSORS.forEach((p) => {
      expect(p).toHaveProperty('id');
      expect(p).toHaveProperty('name');
      expect(p).toHaveProperty('department');
      expect(DEPARTMENTS).toContain(p.department);
      expect(ids.has(p.id)).toBe(false); // her id'nin sadece bir kez geçmesi lazım
      ids.add(p.id);
    });
  });

  it('e-postası olan herkesin e-postası karabuk.edu.tr uzantılı olmalı (herkeste e-posta yok, o serbest)', () => {
    PROFESSORS.filter((p) => p.email).forEach((p) => {
      expect(p.email).toMatch(/@karabuk\.edu\.tr$/);
    });
  });
});
