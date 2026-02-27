import { useModal } from './ModalContext';
export default function TreatmentsSection() {
  const { openModal } = useModal();

  const treatments = [
    {
      tag: 'Plump & Perfect',
      title: 'Lip Fillers',
      desc: 'Add volume and definition to your lips for a naturally fuller look',
      features: ['Enhanced lip volume', 'Improved symmetry', 'Natural-looking results', 'Lasts 6-12 months'],
      image: '/images/lip.png',
    },
    {
      tag: 'Define Your Look',
      title: 'Cheek & Chin Fillers',
      desc: 'Restore volume and contour for a youthful, sculpted appearance',
      features: ['Enhanced facial structure', 'Lifted, contoured cheeks', 'Defined chin profile', 'Long-lasting results'],
      image: '/images/chin.png',
    },
    {
      tag: 'Sharp & Youthful',
      title: 'Jawline Contouring',
      desc: 'Create a defined, masculine or feminine jawline that turns heads',
      features: ['Sharper jaw definition', 'Improved facial balance', 'Non-surgical contouring', 'Immediate results'],
      image: '/images/jawline.png',
    },
    {
      tag: 'Body Contouring & Shaping',
      title: 'Butt Fillers',
      desc: 'Enhance your curves with safe, effective body contouring treatments',
      features: ['Natural-looking enhancement', 'Improved body proportions', 'Minimally invasive', 'Quick recovery time'],
      image: '/images/Butt.jpg',
    },
  ];

  return (
    <section className="flex w-full flex-col items-center bg-white px-5 py-16 font-sans sm:px-6 md:py-20">
      <h2 className="text-center text-[28px] font-bold leading-tight tracking-[-0.02em] text-[#0d0d0d] sm:text-[36px] lg:text-[50px]">
        Our Most Popular Treatments
      </h2>
      <p className="mt-3 max-w-xl text-center text-[15px] font-normal text-[#999999]">
        Discover the transformative power of premium dermal fillers
      </p>
      <div className="treatments-grid mt-10 grid w-full max-w-[1100px] grid-cols-1 gap-6 md:grid-cols-2">
        {treatments.map((t) => (
          <div
            key={t.title}
            className="flex h-full flex-col overflow-hidden rounded-[14px] border-[1.5px] border-[#B8860B] bg-white shadow-[0_2px_16px_rgba(184,134,11,0.08)]"
          >
            <div className="h-[260px] w-full overflow-hidden">
              <img
                src={t.image}
                alt={t.title}
                className="block h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col px-6 py-6">
              <p className="mb-1 text-[12.5px] font-medium tracking-[0.1px] text-[#B8860B]">
                {t.tag}
              </p>
              <h3 className="mb-2 text-[22px] font-bold leading-tight text-[#111111]">
                {t.title}
              </h3>
              <p className="mb-4 text-[13.5px] font-normal leading-[1.5] text-[#888888]">
                {t.desc}
              </p>
              <div className="mb-5 flex flex-1 flex-col gap-2.5">
                {t.features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-[13.5px] font-normal text-[#333333]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#B8860B"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </div>
                ))}
              </div>
              <a
                onClick={openModal}
                className="mt-auto block w-full rounded-[8px] bg-[#B8860B] px-5 py-3.5 text-center text-[14px] font-semibold text-white"
              >
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
