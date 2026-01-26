// app/components/TeamSection.tsx
export default function TeamSection() {
  const teamMembers = [
    {
      name: 'John Anderson',
      title: 'Managing Partner',
      image: '/images/team/john-anderson.jpg'
    },
    {
      name: 'Sarah Mitchell',
      title: 'Senior Partner',
      image: '/images/team/sarah-mitchell.jpg'
    },
    {
      name: 'Michael Chen',
      title: 'Partner, Head of M&A',
      image: '/images/team/michael-chen.jpg'
    },
    {
      name: 'Emily Rodriguez',
      title: 'Partner, Capital Markets',
      image: '/images/team/emily-rodriguez.jpg'
    }
  ];

  return (
    <section id="team" className="py-20 md:py-28 bg-navy text-white">
      <div className="container mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Team</h2>
          <p className="text-gray-300 text-lg max-w-2xl">
            Experienced professionals committed to your success.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-full aspect-square mb-4 bg-gray-700 rounded-sm overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-4xl text-gray-500">
                  {member.name.charAt(0)}
                </div>
              </div>
              <h3 className="text-base font-semibold mb-1">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
