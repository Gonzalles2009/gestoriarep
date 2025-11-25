import { useState } from 'react';

const LoginScreen = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === '5555') {
      localStorage.setItem('gestoria_auth', 'true');
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg-dark)',
      padding: '2rem'
    }}>
      <div style={{
        background: 'var(--bg-panel)',
        border: '1px solid var(--border-color)',
        borderRadius: '1rem',
        padding: '3rem',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>GESTORIA 2.0</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.9rem' }}>
          Конфиденциальный отчёт
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
            style={{
              width: '100%',
              padding: '1rem',
              background: 'var(--bg-dark)',
              border: error ? '2px solid var(--accent-red)' : '1px solid var(--border-color)',
              borderRadius: '0.5rem',
              color: 'var(--text-primary)',
              fontSize: '1rem',
              marginBottom: '1rem',
              textAlign: 'center',
              letterSpacing: '0.3em'
            }}
            autoFocus
          />
          {error && (
            <p style={{ color: 'var(--accent-red)', fontSize: '0.85rem', marginBottom: '1rem' }}>
              Неверный пароль
            </p>
          )}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '1rem',
              background: 'var(--accent-primary)',
              color: '#000',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
