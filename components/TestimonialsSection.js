export default function TestimonialsSection() {
  const CHANNEL_URL = 'https://www.youtube.com/@RamaCarePolyclinic';

  const videos = [
    {
      id: 'RASxmrh6dnU',
      title: 'Before and After Transformation',
    },
    {
      id: 'xnOC8kb5cgo',
      title: 'Before and After Transformation',
    },
    {
      id: 'DSzYBiP1CnY',
      title: 'Before and After Transformation',
    },
    {
      id: 'fE_VstKiQ-4',
      title: 'Before and After Transformation',
    },
    {
      id: 'tFZmw94GBD8',
      title: 'The lip filler result #lipfiller #tre...',
    },
    {
      id: 'DCesJc8lxY0',
      title: 'Before and After Transformation',
    },
    {
      id: '1rPsKVM62GA',
      title: 'Before and After Transformation',
    },
    {
      id: 'iRXzg5InTKI',
      title: 'Butt filler before and after',
    },
  ];

  return (
    <div style={{
      fontFamily: "'Inter', sans-serif",
      background: '#fdf6f0',
      width: '100%',
      padding: '80px 20px 80px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
    }}>

      {/* Heading */}
      <h2 style={{
        fontSize: 'clamp(28px, 3.2vw, 44px)',
        fontWeight: 600,
        color: '#0d0d0d',
        margin: '0 0 12px 0',
        lineHeight: 1.15,
        letterSpacing: '-0.2px',
        textAlign: 'center',
      }}>
        Proudly cared for more than 500 patients
      </h2>

      {/* Subtitle */}
      <p style={{
        fontSize: '14.5px',
        fontWeight: 400,
        color: '#666666',
        margin: '0 0 36px 0',
        textAlign: 'center',
        maxWidth: '600px',
      }}>
        See what our satisfied clients have to say about their experience
      </p>

      {/* Video grid */}
      <div className="video-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        width: '100%',
        maxWidth: '1200px',
      }}>
        {videos.map((video, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              borderRadius: '0px',
              overflow: 'hidden',
              background: '#1a1a1a',
              aspectRatio: '16/9',
              boxShadow: '0 6px 18px rgba(0,0,0,0.12)',
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&playsinline=1`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                inset: 0,
                border: 'none',
              }}
            />
          </div>
        ))}
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 1100px) {
          .video-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 18px !important; max-width: 960px !important; }
        }
        @media (max-width: 700px) {
          .video-grid { grid-template-columns: 1fr !important; gap: 16px !important; max-width: 600px !important; }
        }
        @media (max-width: 480px) {
          h2 { font-size: clamp(26px, 6vw, 36px) !important; }
        }
      `}</style>

    </div>
  );
}
