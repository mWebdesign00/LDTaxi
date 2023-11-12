let langs = document.querySelector(".langs"),
     link = document.querySelectorAll("a"),
     servicesMenuText = document.querySelector(".servicesMenuText"),
     portfolio = document.querySelector(".portfolio"),
     kontakt = document.querySelector(".kontakt"),
     impressum = document.querySelector(".impressum"),
     willkommen = document.querySelector(".willkommen"),
     willkommensText1 = document.querySelector(".willkommensText1");
     willkommensText2 = document.querySelector(".willkommensText2");
     telefonnummer = document.querySelector(".telefonnummer");
     mehrErfahren = document.querySelector(".mehrErfahren");
     services2 = document.querySelector(".services2");
     servicesDescriptionText1 = document.querySelector(".servicesDescriptionText1");
     servicesDescriptionText2 = document.querySelector(".servicesDescriptionText2");
     einzelfahrtenTitel = document.querySelector(".einzelfahrtenTitel");
     einzelfahrtenDescription1 = document.querySelector(".einzelfahrtenDescription1");
     einzelfahrtenDescription2 = document.querySelector(".einzelfahrtenDescription2");
     flughafentransferTitel = document.querySelector(".flughafentransferTitel");
     flughafentransferDescription1 = document.querySelector(".flughafentransferDescription1");
     flughafentransferDescription2 = document.querySelector(".flughafentransferDescription2");
     shuttleserviceTitel = document.querySelector(".shuttleserviceTitel");
     shuttleserviceDescription1 = document.querySelector(".shuttleserviceDescription1");
     shuttleserviceDescription2 = document.querySelector(".shuttleserviceDescription2");
     botendienst = document.querySelector(".botendienst");
     botendienstTitel = document.querySelector(".botendienstTitel");
     rechnungsfahrtenTitel = document.querySelector(".rechnungsfahrtenTitel");
     rechnungsfahrtenDescription = document.querySelector(".rechnungsfahrtenDescription");
     kontaktFormularTitel = document.querySelector(".kontaktFormularTitel");

link.forEach(el=>{
     el.addEventListener("click", ()=>{
          langs.querySelector(".active").classList.remove("active");
          el.classList.add("active");

          let attr = el.getAttribute("language")

          servicesMenuText.textContent = data[attr].servicesMenuText
          kontakt.textContent = data[attr].kontakt
          impressum.textContent = data[attr].impressum
          willkommen.textContent = data[attr].willkommen
          willkommensText1.textContent = data[attr].willkommensText1
          willkommensText2.textContent = data[attr].willkommensText2
          telefonnummer.textContent = data[attr].telefonnummer
          services2.textContent = data[attr].services2
          servicesDescriptionText1.textContent = data[attr].servicesDescriptionText1
          servicesDescriptionText2.textContent = data[attr].servicesDescriptionText2
          einzelfahrtenDescription1.textContent = data[attr].einzelfahrtenDescription1
          einzelfahrtenTitel.textContent = data[attr].einzelfahrtenTitel
          einzelfahrtenDescription2.textContent = data[attr].einzelfahrtenDescription2
          flughafentransferTitel.textContent = data[attr].flughafentransferTitel
          flughafentransferDescription1.textContent = data[attr].flughafentransferDescription1
          flughafentransferDescription2.textContent = data[attr].flughafentransferDescription2
          shuttleserviceTitel.textContent = data[attr].shuttleserviceTitel
          shuttleserviceDescription1.textContent = data[attr].shuttleserviceDescription1
          shuttleserviceDescription2.textContent = data[attr].shuttleserviceDescription2
          botendienstTitel.textContent = data[attr].botendienstTitel
          botendienst.textContent = data[attr].botendienst
          rechnungsfahrtenTitel.textContent = data[attr].rechnungsfahrtenTitel
          rechnungsfahrtenDescription.textContent = data[attr].rechnungsfahrtenDescription
          kontaktFormularTitel.textContent = data[attr].kontaktFormularTitel
     })
})

let data = {
    deutsch: {
        servicesMenuText: "Dienstleistungen",
        portfolio: "Portfolio",
        kontakt: "Kontakt",
        impressum: "Impressum",
        willkommen: "LD Taxi",
        willkommensText1: "Sie kennen das Ziel.",
        willkommensText2: "Wir kennen den Weg!",
        telefonnummer: "0664 7991229",
        mehrErfahren: "Mehr erfahren",
        services2: "Dienstleistungen",
        servicesDescriptionText1: "Wir wissen, dass Transportbedürfnisse keine Uhrzeiten kennen.",
        servicesDescriptionText2: "Verlassen Sie sich daher 24/7 auf LD Taxi für Ihre Fahrten.",

        einzelfahrtenTitel: "Einzelfahrten",
        einzelfahrtenDescription1: "",
        einzelfahrtenDescription2: "Unser Privattransport-Service ist darauf ausgerichtet, Ihre Mobilität so bequem wie möglich zu gestalten. Egal, ob Sie zu einem wichtigen Geschäftstermin müssen oder einfach einen sicheren Weg von A nach B suchen - wir stehen Ihnen zur Verfügung. Kontaktieren Sie uns noch heute, um Ihre nächste Fahrt zu planen.",

        flughafentransferTitel: "Flughafentransfer",
        flughafentransferDescription1: "Von Wien bis Salzburg, LD Taxi bietet Ihnen problemlose Flughafentransfers zu den wichtigsten Flughäfen in Österreich. Beginnen oder beenden Sie Ihre Reise in Österreich stressfrei mit unseren komfortablen und bequemen Flughafentransfers.",
        flughafentransferDescription2: "",

        shuttleserviceTitel: "Shuttleservice",
        shuttleserviceDescription1: "Wenn Sie an einer Veranstaltung teilnehmen oder eine organisieren, können Sie sich auf LD Taxi verlassen. Unser Shuttle-Service steht Ihnen zur Verfügung, um Sie und Ihre Gäste zu befördern.",
        shuttleserviceDescription2: "",
        
        botendienstTitel: "Botendienst",
        botendienst: "Sie haben Pakete oder Dokumente die Sie von A nach B transportieren müssen? Wir bieten die perfekte Lösung mit unserem professionellem Botendienst.",

        rechnungsfahrtenTitel: "Rechnungsfahrten",
        rechnungsfahrtenDescription: "Firmen können Rechnungsfahrten bei LD Taxi buchen, um pünktlich an ihr Ziel zu gelangen. Die Kosten werden später Ihrer Firma in Rechnung gestellt. Buchen Sie rechtzeitig für eine stressfreie Fahrt.",

        kontaktFormularTitel: "Kontaktieren Sie Uns",
    },
    englisch: {
        servicesMenuText: "Services",
        portfolio: "Portfolio",
        kontakt: "Contact",
        impressum: "Impressum",
        willkommen: "LD Taxi",
        willkommensText1: "YOUR DESTINATION.",
        willkommensText2: "OUR EXPERTISE!",
        telefonnummer: "0664 7991229",
        mehrErfahren: "Tell me more",
        services2: "Services",
        servicesDescriptionText1: "We understand that transportation needs have no time constraints.",
        servicesDescriptionText2: "Therefore, rely on LD Taxi 24/7 for your rides.",

        einzelfahrtenTitel: "Single Trips",
        einzelfahrtenDescription1: "",
        einzelfahrtenDescription2: "Our private transportation service is designed to make your mobility as convenient as possible. Whether you need to get to an important business meeting or are simply looking for a safe way to get from A to B, we're here to help. Contact us today to schedule your next ride.",

        flughafentransferTitel: "Airporttransfers",
        flughafentransferDescription1: "From Vienna to Salzburg, LD Taxi offers you hassle-free airport transfers to the main airports in Austria. Start or end your trip in Austria stress-free with our comfortable and convenient airport transfers.",
        flughafentransferDescription2: "",

        shuttleserviceTitel: "Shuttleservice",
        shuttleserviceDescription1: "If you are attending or organizing an event, you can rely on LD Taxi. Our shuttle service is at your disposal to transport you and your guests.",
        shuttleserviceDescription2: "",
        
        botendienstTitel: "Courier Service",
        botendienst: "You have packages or documents that you need to transport from A to B? We offer the perfect solution with our professional courier service.",

        rechnungsfahrtenTitel: "For Companies",
        rechnungsfahrtenDescription: "Companies can book rides with LD Taxi to get to their destination on time. The costs will be invoiced to your company later. Book upfront for a stress-free journey",

        kontaktFormularTitel: "Contact Us",
    }
}
