import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import IdleScreen from '../screens/IdleScreen';
import { STRINGS } from '../strings';

describe('IdleScreen', () => {
  const strings = STRINGS.tr;
  const baseProps = {
    timeStr: '12:00:00',
    dateStr: '1 Ocak Perşembe',
    todayKey: '2026-01-01', // TODAYS_MENU_BY_DATE'te olmayan bir tarih — menü kartı bilerek görünmesin diye
    weather: null,
    duyuruIndex: 0,
    strings,
  };

  it('karşılama başlığını ve saati göstermeli', () => {
    render(<IdleScreen setMode={() => {}} {...baseProps} />);
    expect(screen.getByText(strings.idleWelcomeTitle)).toBeInTheDocument();
    expect(screen.getByText('12:00:00')).toBeInTheDocument();
  });

  it('ekrana tıklanınca setMode("menu") çağrılmalı', () => {
    const setMode = vi.fn();
    render(<IdleScreen setMode={setMode} {...baseProps} />);
    fireEvent.click(screen.getByText(strings.idleWelcomeTitle));
    expect(setMode).toHaveBeenCalledWith('menu');
  });
});
