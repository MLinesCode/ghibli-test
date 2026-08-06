import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CompactHeader from '../../layout/CompactHeader'
import AvatarUser from '../../assets/avatar.png'
import AvatarFlag from '../../assets/japan.png'
import Dragon from '../../assets/dragon.png'
import Pattern from '../../assets/background.png'
import SocialTiktok from '../../assets/icons/tik-tok.svg'
import SocialTwitter from '../../assets/icons/twitter.svg'
import SocialInstagram from '../../assets/icons/instagram.svg'
import { useFavorites } from '../../hooks/useFavorites'
import './profile.css'

const PREFERENCES_KEY = 'ghibli:profile-preferences'

const DEFAULT_PREFERENCES = {
  previews: true,
  notifications: false,
  mobileData: false,
  language: 'Español'
}

const readPreferences = () => {
  try {
    const stored = JSON.parse(window.localStorage.getItem(PREFERENCES_KEY) || '{}')
    return { ...DEFAULT_PREFERENCES, ...stored }
  } catch {
    return DEFAULT_PREFERENCES
  }
}

const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m9 5 7 7-7 7" />
  </svg>
)

const SparkleIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2c.5 5.8 4.2 9.5 10 10-5.8.5-9.5 4.2-10 10-.5-5.8-4.2-9.5-10-10 5.8-.5 9.5-4.2 10-10Z" />
  </svg>
)

const SettingButton = ({ title, description, onClick }) => (
  <button className="profile-row profile-row--button" type="button" onClick={onClick}>
    <span>
      <strong>{title}</strong>
      <small>{description}</small>
    </span>
    <ChevronIcon />
  </button>
)

const Profile = () => {
  const { favoriteIds } = useFavorites()
  const [preferences, setPreferences] = useState(readPreferences)
  const [announcement, setAnnouncement] = useState('')

  useEffect(() => {
    try {
      window.localStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences))
    } catch {
      // The controls remain usable if browser storage is unavailable.
    }
  }, [preferences])

  const togglePreference = (key, label) => {
    const nextValue = !preferences[key]
    setPreferences((current) => ({ ...current, [key]: nextValue }))
    setAnnouncement(`${label}: ${nextValue ? 'activado' : 'desactivado'}.`)
  }

  const showDemoMessage = (label) => {
    setAnnouncement(`${label} estará disponible cuando conectemos una cuenta real.`)
  }

  return (
    <main className="profile-page">
      <CompactHeader showProfile={false} />

      <section className="profile-hero" aria-labelledby="profile-title">
        <img className="profile-hero__pattern" src={Pattern} alt="" aria-hidden="true" />
        <div className="profile-hero__glow" aria-hidden="true" />
        <img className="profile-hero__dragon" src={Dragon} alt="" aria-hidden="true" />

        <div className="profile-hero__content">
          <span className="profile-eyebrow">Tu bitácora del bosque</span>
          <div className="profile-identity">
            <div className="profile-avatar">
              <img src={AvatarUser} alt="Avatar de Akira Chinami" />
              <span className="profile-avatar__flag">
                <img src={AvatarFlag} alt="Japón" />
              </span>
            </div>
            <div>
              <p className="profile-identity__status"><SparkleIcon /> Perfil local</p>
              <h1 id="profile-title">Akira Chinami</h1>
              <p className="profile-identity__subtitle">Exploradora de historias extraordinarias</p>
            </div>
          </div>

          <div className="profile-stats" aria-label="Resumen de tu experiencia">
            <div>
              <strong>{favoriteIds.length}</strong>
              <span>{favoriteIds.length === 1 ? 'favorita' : 'favoritas'}</span>
            </div>
            <div>
              <strong>ES</strong>
              <span>idioma</span>
            </div>
            <div>
              <strong>Local</strong>
              <span>guardado</span>
            </div>
          </div>
        </div>
      </section>

      <p className="profile-live" role="status" aria-live="polite">{announcement}</p>

      <div className="profile-content">
        <section className="profile-panel" aria-labelledby="experience-title">
          <div className="profile-panel__heading">
            <span className="profile-panel__number">01</span>
            <div>
              <h2 id="experience-title">Mi experiencia</h2>
              <p>Haz que cada visita se sienta a tu manera.</p>
            </div>
          </div>

          <div className="profile-row">
            <label htmlFor="profile-language">
              <strong>Idioma de subtítulos</strong>
              <small>Se aplicará a los contenidos disponibles.</small>
            </label>
            <select
              id="profile-language"
              value={preferences.language}
              onChange={(event) => {
                setPreferences((current) => ({ ...current, language: event.target.value }))
                setAnnouncement(`Idioma cambiado a ${event.target.value}.`)
              }}
            >
              <option>Español</option>
              <option>English</option>
              <option>日本語</option>
            </select>
          </div>

          <div className="profile-row">
            <span>
              <strong>Previsualizaciones animadas</strong>
              <small>Da vida a las portadas mientras exploras.</small>
            </span>
            <button
              className="profile-switch"
              type="button"
              role="switch"
              aria-checked={preferences.previews}
              aria-label="Previsualizaciones animadas"
              onClick={() => togglePreference('previews', 'Previsualizaciones animadas')}
            ><span /></button>
          </div>

          <div className="profile-row">
            <span>
              <strong>Notificaciones</strong>
              <small>Recibe novedades del catálogo.</small>
            </span>
            <button
              className="profile-switch"
              type="button"
              role="switch"
              aria-checked={preferences.notifications}
              aria-label="Notificaciones"
              onClick={() => togglePreference('notifications', 'Notificaciones')}
            ><span /></button>
          </div>

          <div className="profile-row">
            <span>
              <strong>Usar datos móviles</strong>
              <small>Permite cargar imágenes fuera de Wi-Fi.</small>
            </span>
            <button
              className="profile-switch"
              type="button"
              role="switch"
              aria-checked={preferences.mobileData}
              aria-label="Usar datos móviles"
              onClick={() => togglePreference('mobileData', 'Uso de datos móviles')}
            ><span /></button>
          </div>
        </section>

        <section className="profile-panel" aria-labelledby="account-title">
          <div className="profile-panel__heading">
            <span className="profile-panel__number">02</span>
            <div>
              <h2 id="account-title">Cuenta y privacidad</h2>
              <p>Controles preparados para una futura cuenta real.</p>
            </div>
          </div>
          <SettingButton title="Correo electrónico" description="akira@example.com" onClick={() => showDemoMessage('Cambiar correo')} />
          <SettingButton title="Contraseña" description="Actualizada hace 3 meses" onClick={() => showDemoMessage('Cambiar contraseña')} />
          <SettingButton title="Privacidad y datos" description="Administra tus preferencias" onClick={() => showDemoMessage('Privacidad y datos')} />
        </section>

        <section className="profile-panel profile-panel--support" aria-labelledby="support-title">
          <div className="profile-panel__heading">
            <span className="profile-panel__number">03</span>
            <div>
              <h2 id="support-title">Ayuda y comunidad</h2>
              <p>Todo lo necesario para seguir explorando.</p>
            </div>
          </div>
          <SettingButton title="Centro de ayuda" description="Preguntas frecuentes y soporte" onClick={() => showDemoMessage('El centro de ayuda')} />

          <div className="profile-social" aria-label="Redes sociales de Studio Ghibli">
            {[
              { icon: SocialInstagram, label: 'Instagram' },
              { icon: SocialTwitter, label: 'Twitter' },
              { icon: SocialTiktok, label: 'TikTok' }
            ].map(({ icon, label }) => (
              <button key={label} type="button" onClick={() => setAnnouncement(`${label}: enlace de demostración.`)} aria-label={`Abrir ${label}`}>
                <img src={icon} alt="" />
              </button>
            ))}
          </div>
        </section>

        <footer className="profile-footer">
          <div>
            <button type="button" onClick={() => setAnnouncement('Términos de servicio: contenido de demostración.')}>Términos</button>
            <button type="button" onClick={() => setAnnouncement('Política de privacidad: contenido de demostración.')}>Privacidad</button>
          </div>
          <Link to="/login">Cerrar sesión</Link>
          <p>Ghibli Test · Experiencia local</p>
        </footer>
      </div>
    </main>
  )
}

export default Profile
