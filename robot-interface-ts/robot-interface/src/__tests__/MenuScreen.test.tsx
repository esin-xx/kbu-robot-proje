import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import MenuScreen from '../screens/MenuScreen';
import { STRINGS } from '../strings';

// Bu testler gerçekten bileşeni "render" edip (sahte bir DOM'a çizip), kullanıcının
// göreceği şeyleri ve tıklama gibi etkileşimleri kontrol ediyor.
describe('MenuScreen', () => {
  const strings = STRINGS.tr;

  it('5 menü kartının başlığını da ekrana basmalı', () => {
    render(<MenuScreen setMode={() => {}} strings={strings} />);
    expect(screen.getByText(strings.menuFind)).toBeInTheDocument();
    expect(screen.getByText(strings.menuAsk)).toBeInTheDocument();
    expect(screen.getByText(strings.menuMap)).toBeInTheDocument();
    expect(screen.getByText(strings.menuAbout)).toBeInTheDocument();
    expect(screen.getByText(strings.menuGeneral)).toBeInTheDocument();
  });

  it('"Fakülte Hakkında" kartına tıklanınca setMode("find") çağrılmalı', () => {
    const setMode = vi.fn(); // vi.fn(): "sahte" bir fonksiyon, çağrılıp çağrılmadığını kaydediyor
    render(<MenuScreen setMode={setMode} strings={strings} />);
    fireEvent.click(screen.getByText(strings.menuFind));
    expect(setMode).toHaveBeenCalledWith('find');
  });

  it('"Kampüs Haritası" kartına tıklanınca setMode("map") çağrılmalı', () => {
    const setMode = vi.fn();
    render(<MenuScreen setMode={setMode} strings={strings} />);
    fireEvent.click(screen.getByText(strings.menuMap));
    expect(setMode).toHaveBeenCalledWith('map');
  });
});
