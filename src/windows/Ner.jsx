import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import { ExternalLink } from 'lucide-react'
import useWindowStore from '#store/window'
import useAudioStore from '#store/audio'
import { useEffect, useRef } from 'react'

const Ner = () => {
  const { focusWindow, windows } = useWindowStore();
  const { pause } = useAudioStore();
  const iframeRef = useRef(null);
  const isOpen = windows['ner']?.isOpen;
  
  const isFocused = (() => {
    const openWindows = Object.values(windows).filter(w => w.isOpen);
    const maxZ = openWindows.reduce((m, w) => Math.max(m, w.zIndex), 0);
    const self = windows['ner'];
    return !!self?.isOpen && self?.zIndex === maxZ;
  })();

  return (
    <>
      <div 
        id='window-header' 
        className='window-drag-handle'
        style={{ backgroundColor: '#f3f4f6' }}
      >
        <WindowControls target="ner" />
        <h2>Weather App</h2>
        <a
          href="https://aaditya9187.github.io/weather-API"
          target="_blank"
          rel="noopener noreferrer"
          title="Open ChessBot in New Tab"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <ExternalLink className="icon mr-3" />
        </a>
      </div>
      <div
  style={{
    position: 'relative',
    width: '100%',
    height: 'calc(100% - 48px)',
    overflow: 'auto', // ✅ enables scrolling
  }}
>

  {!isFocused && (
    <button
      type="button"
      aria-label="Activate ChessBot"
      onClick={(e) => {
        e.stopPropagation();
        focusWindow('ner');
      }}
      style={{
        position: 'absolute',
        inset: 0,
        background: 'transparent',
        cursor: 'pointer',
        zIndex: 10,
      }}
    />
  )}

  <iframe
    ref={iframeRef}
    src="https://aaditya9187.github.io/weather-API"
    scrolling="auto"
    style={{
      width: '100%',
      height: '100%',
      border: 'none',
      display: 'block',
      pointerEvents: isFocused ? 'auto' : 'none',
    }}
    title="ChessBot"
  />

</div>

    </>
  )
}

export default WindowWrapper(Ner, 'ner', 'SlapNer')