export const addressComponents = {
  addresses: {
    "Département du Sud": {
      street: "73 Rue Nicolas Geffrard",
      postalCode: "HT2345",
      city: "Arrondissement des Cayes",
      country: "Haïti",
      mapLink: "https://maps.app.goo.gl/CJThiJHgriBKh1sd8",
      phone: "+(509) 4776 39 92",
      email: "sud@michelcell.ht",
    },
    "Département du Nord": {
      street: "Rue 14, & 15 I",
      postalCode: "HT1110",
      city: "Cap-Haïtien",
      country: "Haïti",
      mapLink: "https://maps.app.goo.gl/8sFk3hG5bV9Rx7QZ8",
      phone: "+(509) 3864 84 59",
      email: "nord@michelcell.ht",
    },
  },

  AddressCard: ({ title, address }) => (
    <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:bg-white/20 hover:border-red-200 transition-all duration-300 group">
      <h4 className="font-sans font-bold text-white text-lg mb-4 flex items-center gap-2 justify-center">
        <span className="w-2 h-2 bg-red-400 rounded-full group-hover:scale-125 transition-transform"></span>
        {title}
      </h4>

      <div className="space-y-4 flex flex-col justify-start">
        <div className="flex items-start gap-3">
          <span className="text-red-300 w-7 h-7 flex items-center justify-center min-w-7">
            <img
              src="/icon/location-map-navigation-pin-svgrepo-com.svg"
              alt="location_svg"
            />
          </span>
          <div className="flex flex-col justify-start">
            <p className="font-sans text-red-100 text-sm underline self-start">
              {address.street}
            </p>
            <p className="font-sans text-red-100 text-sm">
              {address.postalCode}, {address.city} {address.country}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-red-300 w-7 h-7 flex items-center justify-center">
            <img src="/icon/phone-svgrepo-com.svg" alt="phone_svg" />
          </span>
          <a
            href={`tel:${address.phone}`}
            className="font-sans text-red-100 text-sm hover:text-red-400 transition-colors duration-300"
          >
            {address.phone}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-red-300 w-7 h-7 flex items-center justify-center">
            <img
              src="/icon/email-letter-mail-message-svgrepo-com.svg"
              alt="email_svg"
            />
          </span>
          <a
            href={`mailto:${address.email}`}
            className="font-sans text-red-100 text-sm hover:text-red-400 transition-colors duration-300"
          >
            {address.email}
          </a>
        </div>

        <a
          href={address.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-sans text-red-400 text-sm hover:text-red-300 transition-colors duration-300 mt-3 group"
        >
          <span className="w-6 h-6 flex items-center justify-center group-hover:scale-110 transition-transform">
            <img src="/icon/maps-me-svgrepo-com.svg" alt="maps_svg" />
          </span>
          Voir sur la carte
        </a>
      </div>
    </div>
  ),
};
