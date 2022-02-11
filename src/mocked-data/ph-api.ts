export const coordinates = {
  latitude: 47.3847371,
  longitude: 8.5567768,
};

// For more details and params you could check open Pricehubble documentation
// https://docs.pricehubble.com/international/offer_search/
export const phApiMock = {
  message:
    'Request tracing PHApiClienthttps://api.pricehubble.com/api/v1/offers/search?access_token=****',
  request: {
    method: 'POST',
    url: 'https://api.pricehubble.com/api/v1/offers/search?access_token=****',
    body: 'b\'{"offset": 0, "limit": 500, "filters": {"dealType": "sale", "startDate": {"min": "2019-02-10"}, "isActive": true, "location": [{"divisionLevel8": "261"}], "propertyType": [{"code": "apartment"}, {"code": "house"}]}, "orderBy": [{"field": "startDate", "direction": "desc"}], "countryCode": "CH"}\'',
  },
  response: {
    status_code: 200,
    body: {
      items: [
        {
          offerId:
            'd9a5b62aa5322735b8f5f5fe4d99611b45370a26c16edea85ce9f6601e6aed3f',
          dealType: 'sale',
          startDate: '2022-02-09',
          daysOnMarket: 1,
          isActive: true,
          isNew: false,
          isPrivate: true,
          title: 'Haus n\u00e4he Z\u00fcrich City / House near Zurich City',
          description:
            '\r\nAufgrund Umzug einzigartige Opportunit\u00e4t f\u00fcr ein Haus in Rapperswil-Jona, nahe der Stadt Z\u00fcrich und am Z\u00fcrichsee gelegen. In nur 30 Minuten Zugfahrt erreichen Sie den Hauptbahnhof Z\u00fcrich/Bahnhofstasse. Alle 15 Minuten fahren verschiedene Z\u00fcge nach Z\u00fcrich. Das Haus liegt zentral und dennoch ruhig. S\u00e4mtliche Einkaufsm\u00f6glichkeiten in unmittelbarer N\u00e4he. Das neu renovierte Eckhaus mit 4 Schlafzimmern und einem B\u00fcro eignet sich sowohl f\u00fcr eine Familie wie auch f\u00fcr Paare, die Ruhe und einen grossen Garten sch\u00e4tzen.\r\n\r\nAufgrund der momentan hohen Nachfrage und Diskretionsgr\u00fcnden verzichten wir an dieser Stelle auf Fotos. Verkaufsunterlagen inklusive Fotos und Grundrisspl\u00e4ne stehen den Interessenten bei Kontaktaufnahme zur Verf\u00fcgung.\r\n\r\nUnique opportunity for a house in Rapperswil-Jona near the city of Zurich and located on Lake Zurich due to relocation. In just 30 minutes by train you can reach Zurich main station/Bahnhofstrasse. Several trains run every 15 minutes. The house is centrally located and yet quiet. All shopping facilities in the immediate vicinity. The newly renovated semi-detachted house with 4 bedrooms and an office is suitable for a family as well as for couples who appreciate peace and a large garden.\r\n\r\nDue to the currently high demand and for reasons of discretion, we are not publishing photos at this point. Sales documents inclusive picutere and floor plan are available to interested parties when they contact us.\r\n',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/bbf272207a6512cb65aa35291035ebdaed6344b9bb128df0b5f3db8f7e23923b.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/89c26ff049b50c7086228c4960ce70bd2ad9c3a690478516ec5e8ad9dbf7a231.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/4c8ac8c87b84edae36afba7aed24b604a0edd902400f5c283d81dc75d371d234.jpg',
            },
          ],
          url: 'https://www.immoscout24.ch/en/d/semi-detached-house-buy-zuerich/6893341',
          salePrice: 2680000,
          salePricePerSqm: 15765,
          currency: 'CHF',
          address: {
            postCode: '8000',
            city: 'Z\u00fcrich',
          },
          coordinates: {
            latitude: 47.340415,
            longitude: 8.529471,
          },
          buildingYear: 1944,
          propertyType: {
            code: 'house',
            subcode: 'house_semi_detached',
          },
          livingArea: 170,
          landArea: 674,
          volume: 854,
          numberOfRooms: 5.5,
          hasParkingSpaces: true,
          isPreciselyLocated: false,
        },
        {
          offerId:
            '52459399c6e8bac43888589363ac23459ad8b9cc943a54fab295fcf1fd61ec53',
          dealType: 'sale',
          startDate: '2022-02-07',
          daysOnMarket: 1,
          isActive: true,
          isPrivate: true,
          title: 'Wohnen in der Stadt und doch im Gr\u00fcnen',
          description:
            '\r\nZentrale gelegene\u00a0 3\u00bd-Zimmer Hochparterre -Wohnung mit sehr sch\u00f6nen grossen Garten (Nutzungsrecht).\r\n\r\n\u00dcber den Garten gelangen Sie direkt zur Glatt. F\u00fcr Natur und erholung ist gesorgt.\r\n\r\nDie Wochnung\u00a0 besticht durch die sehr sonnige\u00a0 ausgerichtete Lage.\r\n\r\nZus\u00e4tzlich kann ein Aussenparkplatz erworben werden.\r\n\r\nDas wichtigste in k\u00fcrze:\r\n\r\nEingangsbereich mit Einbauschrank  \r\nWohnfl\u00e4che von ca. 70 m\u00b2  \r\nOffenes Wohn- und Esszimmer  \r\nOffene K\u00fcche  \r\nSonnige Lage  \r\nKellerabteil auf wunsch mit eigene Waschmaschine / Tumbler\u00a0 \u00a0 \u00a0 \u00a0 Veloraum\u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 Badezimmer mit Badewanne, Lavabo und ein WC.\u00a0 \u00a0 \u00a0 \u00a0 Bezugsbereit ab sofort\r\n\r\n\r\n\r\nLage:\r\n\r\nDie Schulen, das Zentrum von Schwamendingen mit mehreren Lebensmittelgesch\u00e4fte und das Glattzentrum\u00a0 erreichen Sie in wenigen Schritten.\r\n\r\n\u00d6V: Der Schwamendingerplatz ist ein paar Gehminuten entfernt. Auch der Bahnhof \u00d6rlikon ist schnell erreichbar.\r\n\r\nDirekt an der Glatt.\r\n\r\nAutobahnanschluss richtung Z\u00fcrich 500m und Richtung Osten oder Westen in 1500 m\r\n\r\nDiese Wohnung ist auch bestens als Anlageobjekt geeignet.\r\n\r\nDas Objekt  \r\n   \r\n Es handelt sich hier um eine 3 Zimmer-Wohnung, welche 2000 komplett renoviert wurde.\r\n\r\n\r\n\r\nM\u00f6gliche anstehende Renovation ( K\u00fcche und Bad)\r\n\r\nHaben wir Ihr Interesse geweckt? Wir freuen uns auf Ihre Kontaktaufnahme.\r\n',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/2c39dedad2acd597c57039cdbd9547ed0181989f274a5ae8bdfb5119337f44ee.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/abb1764d87f6e6224a71ae746c6aa95c805a1df4db1e4bba2f77469b8aea6737.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/04e4476fffab7dcc2e18d0fe76303bd7cc53c22052df6d90f1146edb95d0d8de.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/d20c700137e65521afd6a82278585d8b022b816d0d0310e588da8373e59a80e0.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/26676455ac2b3d079ade42800c3e46540c0d7cf5c83d7448893b75e183808273.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/6e7a1cce1e776fd3c1ea9061a141eed5cf92d6e01dd18cd324b981d9d5de5801.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/d87a27cfe14f8dab5a8c06e701ac2c1e20acd439c79507192fe4e57f543d93e8.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/0f93278279e198ff2047acbeb7fa1434bb221a592540de4b8cc45d270d1a27bb.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/c8c4e5378d19d5ca7e0c730e8f7a45aa5f162c2e4648c1e663d58c0ed9cd668b.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/a4ba685fef8bc996348d68ff28906b28197286cbfc9c08c3252e274752fa66fb.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/148de5663ccf327516bbd8cc5223db268e4fd3981c9a96ce50723c8d2d1c3c12.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/945363ec7801876484480387aa6d2358e0cfed316106a5c701991b96f390a132.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/bd20ab8ee3b626b85752e8e92de39c37ab61b726f885f2bd049bfbd5cfb13c47.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/c8e871e5acd304278ff8fbbad282c2c58f1747b67dba2e5536e04cd53ae88c96.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/2a1b5e35bbcba057d745384bfab63f8d4dc8afa73a5a9a6e39451cd2c1256fa9.jpg',
            },
          ],
          url: 'https://www.immoscout24.ch/en/d/flat-buy-zuerich/6912102',
          salePrice: 730000,
          salePricePerSqm: 10429,
          currency: 'CHF',
          address: {
            street: '\u00dcberlandstrasse',
            houseNumber: '291',
            postCode: '8051',
            city: 'Z\u00fcrich, Kreis 12 (Zurich)',
          },
          coordinates: {
            latitude: 47.4097362,
            longitude: 8.5777872,
          },
          buildingYear: 1970,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_normal',
          },
          livingArea: 70,
          numberOfRooms: 3.5,
          hasParkingSpaces: true,
          isPreciselyLocated: true,
        },
        {
          offerId:
            '9c640e0bc6397eee6f54c3af9eaf7ba76364331428d92f1b075926406aabe332',
          dealType: 'sale',
          startDate: '2022-02-07',
          daysOnMarket: 1,
          isActive: true,
          isPrivate: true,
          title: 'Exklusive Gartenwohnung in Z\u00fcrich',
          description:
            '<p>Diese exklusive Wohnung in der Stadt Z\u00fcrich bietet Exklusivit\u00e4t und Luxus, die Sie als zuk\u00fcnftige Eigent\u00fcmer nicht mehr hergeben wollen werden!\u00a0</p><p>Die Wohnung eignet sich sowohl f\u00fcr Familien mit Kindern, wie auch f\u00fcr Paare, die Wert auf einen hohen Ausbaustandard legen, in der Stadt leben m\u00f6chten und doch Lebensraum geniessen m\u00f6chten.\u00a0</p><p>Die Wohnung bietet folgendes:</p><ul><li><p>Gartenwohnung in der Stadt Z\u00fcrich</p></li><li><p>Wohnfl\u00e4che von ca 140 m2</p></li><li><p>Gartenfl\u00e4che von 121 m2</p></li><li><p>3 Zimmer mit eigenem Balkon</p></li><li><p>Erbaut im Jahr 2014</p></li><li><p>Moderner Stiel</p></li><li><p>Grosse Fensterfronten, mit viel Tageslicht und hellen R\u00e4umen</p></li><li><p>Grosse K\u00fcche mit top Ger\u00e4ten</p></li><li><p>Hauptschlafzimmer mit Badezimmer en Suite</p></li><li><p>Separater Waschkeller f\u00fcr Waschmaschine und Tumbler</p></li><li><p>Diverse Einbauschr\u00e4nke im Entr\u00e9e und im Schlafzimmer</p></li><li><p>Lift</p></li><li><p>Garage mit Elektroladestation in Tiefgarage</p></li><li><p>Tramstationen 7 und 9 in unmittelbarer N\u00e4he</p></li></ul><p></p><p>Die Bilder zeigen die Wohnung aktuell. Zus\u00e4tzlich finden sie auch den Grundrissplan in diesem Inserat. Weitere Informationen sowie eine ausf\u00fchrliche Verkaufsdokumentation erhalten Sie gerne auf Anfrage.</p>',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/4589c2eb2abcc1dcb737fe548bc898e593dc61beba1ae444430f1c77782abb5e.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/5cdfd7c9ba6c91763a18120e7fead4e574079fcfe6308e5e40c7db45ed735b4d.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/c4c03c4f5323b7a26da2230aa6324c1cfc8e7d59554a72fc01b9da6d2757aa1b.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/6a39d15089edcdd0021cdf47e0c683495c3412de25ebf885bf7554626593dc29.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/55f592e4e0173a0923c89b9e490d32d101926a5aa20cd0d8396699b930a7444a.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/d005dd76d7d2a8010a9815ca2379f0feac097b78a17baa231b0f269976e9c8dd.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/a667f5826068d6d8206c9ad189c5c997b034d7d741c418bbd05df2478fb4079f.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/52742a502ecf4cf9671eeb664c1bdc7759ce5f4be5d27c53495f0478c411461e.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/073a83e405e370e26bd32624e39f2467a4561a90e74df0ac420e1e909004a773.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/2eac3e6ec4c929350f5ada211b2e81c37406804ba08f4b61eacfc2e65598eea9.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/a515febfee3272dcff7b37ecd69f3e5c170bc6281c9b68c60f6836a9e348cd93.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/c2f63e4dd85bc7c26e99bbc9c76f4c6fd387038b5a364b4af84701b9c66327c1.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/ef46e9cd17a43f3dff05204bd330cd2adabb96a86d4f8d4a307c5b476c5a1227.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/925f0609bdab57081950e82a498f1d42778051eaf3bfefaee45ea7abad22ee3a.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/bcf6645aac339824694f9768da0eb8c98193314bf729e7ce89023ce6c123f095.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/929387d07be0a5f7337affd170621d78b6435fe8c8327d46843eaaacc9fbc0d3.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/3c7d7cf42f5db11412e8a2fc996b4e381f7d7282f6533a4b79539ef42250bebb.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/be5e97256af92d6be483ecd5549cfd5d90f3a6023792b110d779dd6cece09b84.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/cbbabff62af58f0715ffb507c5e48b8c60576f954944425fa59b09bbe2987879.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/d2d833518171d9030eb9127c3fd55fe4c842d742315041c75315e02b7f3b5211.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/67bb99d747313f4343b27e30fad4a994286f95c36e258f4fdb902ad054ce98ca.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/89b9ccce6b8d790298199960714e294cee920d96e00697a07a2c64be32ce0fa1.jpg',
            },
          ],
          isExclusive: false,
          url: 'https://www.homegate.ch/buy/3001668099',
          salePrice: 2450000,
          salePricePerSqm: 17500,
          currency: 'CHF',
          address: {
            postCode: '8050',
            city: 'Z\u00fcrich',
          },
          coordinates: {
            latitude: 47.412291592231,
            longitude: 8.557221101138,
          },
          floorNumber: 0,
          buildingYear: 2014,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_normal',
          },
          livingArea: 140,
          numberOfRooms: 5.5,
          hasLift: true,
          isPreciselyLocated: false,
        },
        {
          offerId:
            'ca03c2cb9623e2735dbba8e40e1e662747912f59e02d776812cdfd63d3088649',
          dealType: 'sale',
          startDate: '2022-02-07',
          daysOnMarket: 1,
          isActive: true,
          isPrivate: false,
          title:
            '4 Zimmer Maisonette Wohnung - Eine Oase mitten in Z\u00fcrich',
          description:
            "Mitten in Z\u00fcrich gelegen, erwartet Sie diese traumhafte 3 Zimmer-Maisonette-Wohnung, welche Sie mit wenig Aufwand wieder zu einer 4 Zimmer Wohnung zur\u00fcck verwandeln k\u00f6nnen. Hier werden Sie mit einer Aussicht \u00fcber das Wohnquartier verw\u00f6hnt. Diese Wohnung ist ideal geeignet f\u00fcr kleine Familien und Paare. Sie punktet mit ihrer zentralen Lage, in unmittelbarer N\u00e4he befindet sich der Hauptbahnhof sowie Schulen und Einkaufsm\u00f6glichkeiten.  \r\n  \r\nSie betreten Ihre Wohnung \u00fcber ein praktisches Entr\u00e9e mit Garderobe. Ihr Blick f\u00e4llt direkt in das lichtdurchflutete Wohnzimmer mit bodentiefen Fensterfronten, welche den Raum zum grossen Balkon hin \u00f6ffnen. In der halb-offenen K\u00fcche finden Sie alles, was das Herz begehrt. Eine Nasszelle mit Dusche, WC und Waschturm vervollst\u00e4ndigt das Raumangebot auf dieser Ebene.  \r\n  \r\n\u00dcber die interne Treppe gelangen Sie in das Untergeschoss. Hier finden Sie zwei grosse Schlafzimmer mit je einem eigenen Zugang zum 3m2 Balkon und eine zweite Nasszelle mit Doppellavabo und Badewanne. Aus dem 23.5m2 grossen Zimmer k\u00f6nnen zwei Zimmer gemacht werden. Diese Variante finden Sie auch als Vorschlag mit einem Grundriss in den Unterlagen. Praktische Einbauschr\u00e4nke und ein Reduit bieten gen\u00fcgend Stauraum.  \r\n  \r\nDie Wohnung ist vermietet und kann derzeit gut als Rendite-Objekt genutzt werden. Die Mieter haben auf Ende M\u00e4rz 2023 gek\u00fcndigt. Der Mietzins betr\u00e4gt CHF 3`510.- Brutto.  \r\n  \r\nF\u00fcr Ihr Fahrzeug erwerben Sie f\u00fcr zzgl. CHF 60'000 einen Tiefgaragenparkplatz.  \r\n  \r\nFolgen Sie Ihrem Bauchgef\u00fchl und melden Sie sich noch heute f\u00fcr einen unverbindlichen Besichtigungstermin. Wir freuen uns auf Ihren Anruf.  \r\n  \r\n  \r\n  \r\n",
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/b811e3d514779d83cac715e22f3c5ec0b70fd3ed1edda0a9cc9e15498ba53b4a.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/0435bafde9282309e89e1791c8e41cfb71c2e974934657226fcc564cb3ad85bb.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/1a9c18da902d7d1bd6ed712a3f39dd031b10e27c5173ad7daf76be6145466c0f.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/6c8eb237b195f82a5f32d3a86953d492615bff2013d69f8c67c5d1fe3781932e.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/929f659fa8efeb1439ae3406981d0a8c0c1df90a27a630c7499fa62c665da733.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/7f1632f926367d84128e6c0f7d20b8baa6e1e057d0574dce313061c85bb41561.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/8ddaf4651d09d5b4ad1329bc8beb2023b96f28e84d0659b2a004c8b2d3e118a8.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/500b1288b8d4063aecceb40ad721735b05259b723c2dbc52d5f9a0526960c271.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/a529b00b27be50ff02d74c763b7769802c85fddb52b22b99f2272c302070d32b.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/ce22fa6104ff9af743f93082caa1c7f64dd16cded8f8f9f6fdf1ad33d0e9c2a2.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/500ebd69d953f21e53626d81df788783c0e44e0df5ca9b5acbd62c6555a335c3.jpg',
            },
          ],
          contactInfo: {
            webUrl: 'http://www.emperio.ch',
            isGuest: false,
            logoUrl:
              'https://www.immoscout24.ch/resources/memberlogos/L1220139-R.jpg',
            lastName: 'Nicole Schroth',
            userType: 'M',
            reference: 'Nicole Schroth',
            companyZip: '8954',
            companyCity: 'Geroldswil',
            companyName1: 'emperio AG',
            companyStreet: 'Poststrasse 3',
            showLogoOnSerp: true,
            isAccountMigrated: true,
            logoUrlDetailPage:
              'https://www.immoscout24.ch/resources/memberlogos/L1220139-R.jpg',
            companyPhoneMobile: '079 755 09 18',
            companyPhoneBusiness: '044 586 33 44',
          },
          url: 'https://www.immoscout24.ch/en/d/duplex-maisonette-buy-zuerich/6914600',
          salePrice: 2340000,
          salePricePerSqm: 20000,
          currency: 'CHF',
          address: {
            street: 'Nordstrasse',
            houseNumber: '36',
            postCode: '8006',
            city: 'Z\u00fcrich, Kreis 6 (Zurich)',
          },
          coordinates: {
            latitude: 47.3858937,
            longitude: 8.5384307,
          },
          floorNumber: 3,
          buildingYear: 2001,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_maisonette',
          },
          livingArea: 117,
          numberOfRooms: 4.0,
          hasLift: true,
          isPreciselyLocated: true,
        },
        {
          offerId:
            '7799ec50bdfdede62074de8142ccb9f7f4c9e257a1b19717203efcc9028447b0',
          dealType: 'sale',
          startDate: '2022-02-04',
          daysOnMarket: 4,
          isActive: true,
          isNew: true,
          isPrivate: false,
          title:
            'Frisch & Frech - Wehntalerpark - f\u00fcr Jung und Junggebliebene',
          description:
            'An der Wehntalerstrasse 571 in Z\u00fcrich-Affoltern entstehen per Fr\u00fchling/Sommer 2023 insgesamt 23 aussergew\u00f6hnliche Stadtwohnungen. Der Baustart ist erfolgt.\nErf\u00fcllen Sie sich den Traum Ihres Eigenheims und lassen Sie sich vom Wehntalerpark inspirieren.\n\nDie wichtigsten Vorz\u00fcge in der \u00dcbersicht:\n\n-\tNahe am Quartierzentrum gelegen\n-\tBeste Verkehrsanbindungen\n-\tZeitgem\u00e4\u00dfe Architektur mit interessanten Grundrissen\n-\tModerner Ausbau\n-\tRaumhohe Fenster f\u00fcr optimale Lichteinf\u00e4lle\n-\tErdsondenheizung mit passiven Free-Cooling System im Sommer\n\nZudem wird das Angebot an Aussenfl\u00e4chen (Sitzplatz, Balkon oder Terrasse) bei der Mehrheit der Wohnungen mit einem praktischen Wintergarten abgerundet.\nSie m\u00f6chten gerne mehr \u00fcber diesen attraktiven Neubau in Erfahrung bringen und Einblick in die verschiedenen Grundrisse erhalten? Wir freuen uns! \n\nKontaktieren Sie uns bitte via Kontaktformular. Sie erhalten umgehend die weiteren Informationen zugestellt.\n\nIhr INIZIA-Verkaufsteam',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/b63faead54a1fea8040efa929bb88f245c04a99b003f3782f63c305b6194f96b.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/9e0341434e14c2ab299c03e7ae9abf1f577cebc6bdc691260a6d579ce1f93a0a.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/d6ff8139f66ddcc3fb776574396ef4cca4e1e863e0a7b8d2f943651828081583.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/8a722d11cbf3fd3d3be7ff8d1b25de7996f165a7a84558a8b61b97e75cf5fa2c.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/b98e47f9fdcf78c2139dc0d59fcca29744f500edb49d88ce166580e67f087734.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/47efdb0a0b7b32c1438e8431000def16c80e276d532b4a188a895fa746753590.jpg',
            },
          ],
          contactInfo: {
            inquiryPerson: {
              name: 'Michaela M\u00fcller',
              phone: '+41 44 404 78 78',
            },
          },
          isExclusive: false,
          url: 'https://www.homegate.ch/buy/3001663122',
          salePrice: 1060000,
          salePricePerSqm: 11648,
          currency: 'CHF',
          address: {
            street: 'Wehntalerstrasse',
            houseNumber: '571',
            postCode: '8046',
            city: 'Z\u00fcrich-Affoltern',
          },
          coordinates: {
            latitude: 47.419761852011,
            longitude: 8.503421294287,
          },
          buildingYear: 2023,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_normal',
          },
          livingArea: 91,
          numberOfRooms: 3.5,
          hasLift: true,
          hasParkingSpaces: true,
          isPreciselyLocated: true,
        },
        {
          offerId:
            'f5d5637ca39cee111b18cf715a6193e112dd930cce074ac53724858a4f356b6c',
          dealType: 'sale',
          startDate: '2022-02-03',
          daysOnMarket: 5,
          isActive: true,
          isPrivate: false,
          title: 'RUHIGE und ZENTRALE 4 1/2-Zi. Dachwohnung mit einer Galerie',
          description:
            "<b>Grossz\u00fcgige Dachwohnung </b>\nIn absolut ruhiger und doch zentraler Lage in Z\u00fcrich Seebach steht diese attraktive 4 1/2 Zimmer <b>Dachwohnung mit einer Galerie</b> zum Verkauf. Das im 2003 erstellte Mehrfamilienhaus mit Tiefgarage liegt an einer Sackgasse. S\u00e4mtliche Gesch\u00e4fte des t\u00e4glichen Bedarfs liegen in der N\u00e4he. Tram- und Busstation (Richtung Flughafen o. Bahnhof Oerlikon) sind in ein paar Gehminuten erreichbar.\n\nDiese Eigentumswohnung punktet durch folgende Attribute:\n\n<ul><li>grossz\u00fcgiger und origineller Grundriss (mit Galerie)</li><li>separater Waschraum in der Wohnung im Obergeschoss</li><li>grosser Hobbyraum/Estrich im Obergeschoss</li><li>offene und helle K\u00fcche mit Foodcenter</li><li>windgesch\u00fctzte Loggia</li><li>viel Stauraum und Einbauschr\u00e4nke</li><li>zus\u00e4tzlicher Keller im UG / Lift</li><li>ein Tiefgaragenplatz im Verkaufspreis inkl.</li><li>Chemin\u00e9e Einbau m\u00f6glich</li></ul>Top Lage in Z\u00fcrich Seebach:\n\n<ul><li>ruhig und zentral</li><li>an einer Sackgasse (gen\u00fcgend blaue Zonen)</li><li>Schule und Kindergarten um die Ecke (ideal f\u00fcr Kinder)</li><li>\u00d6V (Tram und Bus) in der N\u00e4he</li><li>Einkauf, div. Gesch\u00e4fte</li><li>Freibad Seebach (300m) /Tennisclub</li><li>usw.</li></ul><b>Verkaufsrichtpreis: Fr. 1'790'000.-</b>\n\nHaben wir Ihr Interesse geweckt, dann verlangen Sie die Verkaufsunterlagen oder rufen Sie uns an.\n\n\u00a0\n\n\n\n",
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/16a4574e577c5840a7735aeb192ccc5573b6f9c9a807c6b061b3888d4b250a44.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/4a78d6dc6d8ddf79a70444d2fbf7305f381e47b9a3cfe440d069708cdca962ee.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/8db484955303dfe337c7ec5e686c6ecde3d404058269bfededbb56eaecc12294.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/4e74d4ec300e307bba48cdb1e49f042f2b2a75fdfc03ce499dd33ce0e4a58037.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/8ed15162da668179688b0100b6f100c10eb57287027e7d14d76853fa1b7d1495.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/b0f480a2e76de39436f56204f5907f215e6dd325b3ee53bad510308d2df66385.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/7d8c22187683d1cf2cb9d9fcc1566eab897f0b98c121821fe9caef5609561c6f.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/ab392606e77791dad10f48ab26ac78d658c1f4c87989680e082f7e01ae950e2e.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/364474cb10e7c21950c1827a232651eac3fea8353121064039f6e643b3bf1a5a.jpg',
            },
          ],
          contactInfo: {
            inquiryPerson: {
              name: 'Roland A. Munz',
              phone: '+41445150041',
            },
          },
          isExclusive: false,
          url: 'https://www.homegate.ch/buy/3001661758',
          salePrice: 1790000,
          salePricePerSqm: 12695,
          currency: 'CHF',
          address: {
            postCode: '8052',
            city: 'Z\u00fcrich',
          },
          coordinates: {
            latitude: 47.423281852011,
            longitude: 8.542261294681,
          },
          floorNumber: 3,
          buildingYear: 2003,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_attic',
          },
          livingArea: 141,
          landArea: 1010,
          volume: 6712,
          numberOfRooms: 4.5,
          hasLift: true,
          isPreciselyLocated: false,
        },
        {
          offerId:
            'acf6b05bbbc83d7a1a9eb53986cd7ddd9d0c0d19b992e789ccab96241da82d84',
          dealType: 'sale',
          startDate: '2022-02-02',
          daysOnMarket: 6,
          isActive: true,
          isPrivate: false,
          title: 'Grossz\u00fcgige Dachwohnung mit Atrium und Dachterrasse',
          description:
            "<b>Qualit\u00e4t und \u00c4sthetik das Seinesgleichen sucht</b>\n<b>EIN JUWEL MIT 170 m2 WOHNFL\u00c4CHE\n</b>Die grossz\u00fcgige 4.5-Zimmer-Wohnung \u00fcberzeugt mit qualitativ hochwertigem Ausbau, barrierefreiem Zugang und einem einzigartigen Atrium mit Dachterrasse. Ein echtes Highlight ist der Parkettboden aus amerikanischem Kirschbaum aus \u00fcberlangen Paneelen, der sich durch alle R\u00e4ume ? exklusive der Nasszellen ? erstreckt. Diese sind mit keramischen Bodenbel\u00e4gen ausgelegt und bieten mit Philippe Starck Waschtischen und begehbaren Regenduschen eine einzigartige Kombination aus Funktionalit\u00e4t und \u00c4sthetik. Die K\u00fcche begeistert mit einer grossz\u00fcgig dimensionierten Kochinsel (Abdeckung satinierter Nero Assoluto), einem eingebauten Wok sowie Miele- und V-Zug-Ger\u00e4ten.\n\n<b>WEITERE HIGHLIGHTS</b>\nEin verglastes Atrium und eine Terrasse laden zum Verweilen und Geniessen ein. Von der rund 26 m2 grossen Dachterrasse mit Sonnensegel l\u00e4sst sich eine 360\u00b0-Aussicht vom S\u00e4ntis bis zur L\u00e4gern bewundern.\nWeitere Features wie eine begehbare Garderobe, eine W\u00e4schekonsole und ein schwebender Schrank aus amerikanischem Kirschbaum, Fenstersichtschutz aus Japanpapier und seidener Wandbehang von Etro schaffen eine einzigartige und repr\u00e4sentative Atmosph\u00e4re.\n\n<b>DAS BESONDERE\u00a0</b>\n- Kinderkrippe www.joyfactory.ch in der \u00dcberbauung\n- Verglastes Atrium mit Dachterrasse\n- Kellerraum im Untergeschoss\n- Waschmaschine und Tumbler in der Wohnung\n- Ruhige und sonnige Lage mit hoher Privatsph\u00e4re\n- N\u00e4he \u00d6V, Schulen, Einkaufsm\u00f6glichkeiten und\n- Erholungsgebiet, z.B. Katzensee\u00a0\n- Lift, Unterniveaugarage mit direktem Zugang\n- \u00d6kologisches Heizsystem Fernw\u00e4rme\n- Elektrisch bedienbare Rolll\u00e4den\n- Elektrisch bedienbare Oblichter in den Nasszellen\n- Gegensprechanlage mit Kamera\n- Kellerraum im Untergeschoss\n- 2 Tiefgaragenpl\u00e4tze k\u00f6nnen f\u00fcr je CHF 45'000.00 dazugekauft werden\n\nHaben wir Ihr Interesse geweckt? Wir freuen uns auf Ihre Kontaktaufnahme.\n\n",
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/b162a6c9deef3b3c8ffae6fd26a8c6f3e609a60eb815622881f84c5572e473f3.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/8e869cd9c44dcac6901a56c94a3e3a32b74b606a3a6e34bedd8a7240e6d6cd9b.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/45a6162977836140d3cfe34ea96b7cbcb13482422778bda4d8ed32024d472de6.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/44b4e8438ed434091345385e03deaf43be4406253b904074f83d1bc1a17cdec4.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/9f0017846e76d593b700c02be89b08115297893d2522b260cb633331ea303a2a.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/4a911ac9325e50939f47e34c5a8125885f09a95005f1674f13ca5967ded7aabc.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/62c71734dfb624dab21f04228c5c2586b861bb9bcd6c5cd47daa2031084a0cad.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/9156cd3d0ff89ba64615f7f869249e7a474fd14eccd12b1a57f12a5d2c047b5e.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/164ec5f2023828f8d0fc1b5d37fd31c12c65c14c304bf7cd2db8d2333f90791e.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/89926b6eabbdb3a43bc2ba9ca4cbdfeb518d51c92de177445cc437849714478f.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/3c6b5677cb8e830b68bbca7033f533882b796a469b5b69bc2c657799cc407fc4.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/e9ac031eef76a2bcc323c6fe53cfbd919d829e04a75864a7b390954451c5c712.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/7dd077792ad78c4431efab512cc32e0de7c9e24ceda9f7055ffa2655bcdd1e36.jpg',
            },
          ],
          contactInfo: {
            inquiryPerson: {
              name: 'Stephan Gm\u00fcr',
              phone: '+41438435554',
            },
          },
          isExclusive: false,
          url: 'https://www.homegate.ch/buy/3001656999',
          salePrice: 2500000,
          salePricePerSqm: 14706,
          currency: 'CHF',
          address: {
            street: 'Katzenbachstrasse',
            houseNumber: '213',
            postCode: '8052',
            city: 'Z\u00fcrich',
          },
          coordinates: {
            latitude: 47.423744,
            longitude: 8.5420846,
          },
          floorNumber: 3,
          buildingYear: 2009,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_attic',
          },
          livingArea: 170,
          numberOfRooms: 4.5,
          hasLift: true,
          hasParkingSpaces: true,
          isWheelchairAccessible: true,
          isPreciselyLocated: true,
        },
        {
          offerId:
            'e5005e3e9a703418148332a5d082ddcf8e12c90ab7d6d3f541c6fcc608db29d5',
          dealType: 'sale',
          startDate: '2022-02-02',
          daysOnMarket: 6,
          isActive: true,
          isPrivate: false,
          title: '2-Generationenhaus in bevorzugtem Wohnquartier',
          description:
            'Das freistehende Wohnhaus befindet sich an ruhiger Lage in einem bevorzugten Wohnquartier mit mehrheitlich Einfamilienh\u00e4usern in Z\u00fcrich-Seebach. Das Grundst\u00fcck befindet sich an einer Sackgasse. Die Erschliessung erfolgt \u00fcber eine Privatstrasse. \n\nDie Einkaufsm\u00f6glichkeiten sowie die Schulen und der Kindergarten sind bequem zu Fuss erreichbar. Die Bus- und Tramhaltestelle "Seebacherplatz" befindet sich in kurzer Gehdistanz. Von hier aus erreichen Sie den Bahnhof Oerlikon in ca. 3 Fahrminuten (ideale S-Bahn- und Schnellzugverbindungen zum Z\u00fcrich HB und Z\u00fcrich Flughafen). Der Autobahnanschluss in alle Richtungen ist nur ca. 3 Fahrminuten entfernt. Die Einkaufsm\u00f6glichkeiten im Zentrum Oerlikons sowie das "Glattzentrum" in Wallisellen, laden zu ausgiebigen Shopping-Touren ein. Viele Freizeit- und Kulturaktivit\u00e4ten sowie das Naherholungsgebiet befinden sich in der N\u00e4he.\n\n2-Familienhaus \n\nUntergeschoss: \nVorplatz ca. 5.5 m\u00b2, Waschk\u00fcche ca. 6.5 m\u00b2, Heizung/Tankraum ca. 7.5 m\u00b2, Keller 1 ca. 3.5 m\u00b2, Keller 2 ca. 11.0 m\u00b2, Trockenraum ca. 16.0 m\u00b2, Keller 3 ca. 11.0 m\u00b2, Keller 4 ca. 13.0 m\u00b2, Werkstatt ca. 6.5 m\u00b2 mit direktem Ausgang in den Garten\n\nErdgeschoss: \n3 \u00bd-Zimmerwohnung, NF ca. 72.0 m\u00b2 \nEntr\u00e9e/Vorplatz ca. 4.5 m\u00b2 mit Einbauschrank, Wohn-/Esszimmer ca. 29.5 m\u00b2 mit Zugang in den Wintergarten (ca. 12.0 m\u00b2, unbeheizt), K\u00fcche ca. 7.5 m\u00b2, Zimmer ca. 10.5 m\u00b2, Zimmer ca. 16.5 m\u00b2 (Zugang in den Wintergarten), Dusche/WC ca. 3.5 m\u00b2\n\n5 \u00bd-Zimmer-Maisonettewohnung, NF ca. 114.5 m\u00b2 \n1. Obergeschoss:\nEntr\u00e9e/Vorplatz ca. 4.5 m\u00b2, sep. WC ca. 3.5 m\u00b2, Wohn-/Esszimmer ca. 34.0 m\u00b2 mit Ausgang auf die Terrasse (ca. 13.5 m\u00b2), K\u00fcche ca. 7.5 m\u00b2, Zimmer 1 ca. 10.5 m\u00b2 \n\n2. Obergeschoss:\nEntr\u00e9e/Vorplatz ca. 4.5 m\u00b2, Bad/Dusche ca. 8.0 m\u00b2, sep. WC ca. 2.0 m\u00b2, Zimmer 2/Ankleide ca. 10.5 m\u00b2 mit Einbauschr\u00e4nken, Zimmer 3 ca. 13.5 m\u00b2, Zimmer 4 ca. 16.0 m\u00b2 \n\nDachgeschoss: \ngrosser Estrichraum (unbeheizt, keine Stehh\u00f6he) \n\nParkierungsm\u00f6glichkeit: \n3 Aussen-Abstellpl\u00e4tze\n\nDie Liegenschaft pr\u00e4sentiert sich in einem sehr guten und gepflegten Allgemein-Zustand. \nIm Jahre 1999 wurden umfassende Erneuerungen/ Modernisierungen vorgenommen. Unteranderem wurde die Maisonettewohnung komplett erneuert (2 Wohnungen zusammengelegt) und die Wohnung im Erdgeschoss renoviert.\n\nGerne lassen wir Ihnen die detaillierte Verkaufsdokumentation zukommen und freuen uns auf Ihre Kontaktaufnahme mittels Kontaktformular.\n\nBaujahr: 1938',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/3fbcec25c6166c7eb9c5b2ad60dbe2babd40a33293693944f96b67b37396275e.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/778c08b565b5bb4534f24a8193ae384df4d83c15820f198b6f2da48986bcdaf4.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/99452e5ea82451ac7201cc42f6a45c2b65855a1db0c1022c9b453cbb1ac415ca.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/f3016599ddc19e30ae48ab1d129fb3c7d7efdb1d4ac7763c306b37e43b18c54f.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/b15ef8f3023be077d31ff0f883f10068a243d794565623b3ac954c4b6fa77fcd.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/09777af16c92963c2423d6b91bd04bb28eb8a74da0e0c807c4e86f6674a8ceed.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/bfb9f1a5e649f2a1cea5f21e31db4e0de25866f22b05821f969f28f10e9bab89.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/02ea175014bc0da0c196f6f216d4035f8b895de662fb144e73c9a4e156d3d66f.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/dac74d0f1015c3d7b1b908ff25afe5c0c9d22874a0bd2b250dd1b9d03d78e4d4.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/2d7e96abd48058b8a0219506d13aa723339f4a4776670a3d904aa7aa296807fc.jpg',
            },
          ],
          contactInfo: {
            inquiryPerson: {
              name: 'Herr Reto Bindsch\u00e4dler',
              phone: '044 487 17 78',
            },
          },
          isExclusive: false,
          url: 'https://www.homegate.ch/buy/3001658141',
          salePrice: 2900000,
          salePricePerSqm: 15591,
          currency: 'CHF',
          address: {
            street: 'Giebeleich',
            houseNumber: '2',
            postCode: '8052',
            city: 'Z\u00fcrich',
          },
          coordinates: {
            latitude: 47.419857,
            longitude: 8.5503372,
          },
          buildingYear: 1938,
          propertyType: {
            code: 'house',
            subcode: 'house_detached',
          },
          livingArea: 186,
          landArea: 470,
          volume: 1008,
          isPreciselyLocated: true,
        },
        {
          offerId:
            '4e0f1916ad4251dd846d32e9f4f2bc21989d6260c43bbb420666b8f4f67dfeef',
          dealType: 'sale',
          startDate: '2022-01-31',
          daysOnMarket: 8,
          isActive: true,
          isNew: true,
          isPrivate: false,
          title:
            'Lichtverw\u00f6hnte Familienwohnung in urbaner Neubausiedlung',
          description:
            "An urbaner Lage in Z\u00fcrich-Affoltern angesiedelt, ist diese Wohnung in ein gepflegtes Neubauquartier eingebettet und besticht mit vielerlei Privilegien f\u00fcr Gross und Klein. Gastronomie- und Kulturangebote garantieren ein st\u00e4dtisches Lebensgef\u00fchl und vereinen dabei in Kombination mit allerlei Freizeitangeboten und naheliegenden gr\u00fcnen Erholungszonen einen perfekten Mix aus urbanem Lebensgef\u00fchl mit zugleich ruhigem Charakter.\r\n\r\nDie Wohnung ist im 4. Obergeschoss einer modernen \u00dcberbauung angesiedelt und erstreckt sich auf 4.5 Zimmern \u00fcber rund 123m\u00b2 Wohnfl\u00e4che, wodurch grossz\u00fcgiger Lebensraum garantiert ist. Das gelungene Raumkonzept weist eine perfekte Trennung der einzelnen Themenbereiche auf und besticht gleichermassen durch eine hochwertige Materialisierung als auch einem lichtdurchfluteten Ambiente.\r\n\r\nDas Zentrum bildet der offen gestaltete Wohn- und Essbereich mit integrierter K\u00fcche und Ausgang zur \u00fcberdachten Terrasse mit Abendsonne. Die K\u00fcche, in edlem Vanilleton gehalten, widerspiegelt einen gelungenen Kontrast zum dunklen Echtholzparkettboden. Sehr gut gepflegt und teils mit neuen Ger\u00e4ten ausgestattet, erstrahlt diese wie neu und unterstreicht den guten Zustand der gesamten Wohnung.\r\n\r\nDrei Schlafzimmer und zwei Nasszellen, wovon eine mit Fenster ausgestattet und als Bad en suite konzipiert, erg\u00e4nzen das Raumangebot ideal.\r\n\r\nEine private Waschk\u00fcche, die sich innerhalb der Wohnung befindet, bietet viel Bequemlichkeit in den eigenen vier W\u00e4nden.\r\n\r\nDie Wohnung verf\u00fcgt zudem \u00fcber eine eigene Bel\u00fcftungsanlage und ist somit auch f\u00fcr Allergiker bestens geeignet.\r\n\r\nZwei Tiefgaragenpl\u00e4tze k\u00f6nnen f\u00fcr zus\u00e4tzlich je CHF 30'000.\u2013 \u00fcbernommen werden.",
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/dc5e164fb1bea756176d5af21634bbd206b663d2004c78f28f7721ba8128102b.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/4f82a2a02a2982dd33173ce817576ab1dbbacad52cd7371e94c4abf77d9d3ba0.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/f0a9c8f4a7b272eba13ff0be969ea9897cf0d6ed89061aa27420fa209ece23af.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/841ab26c1f30f01252a61bd8e6e28a9e409307ce428e530055fe0c3955d319ee.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/dba767cc3b2c28df555c584af4385b5f84d6a7c33a4f8f1e6e8b36de5d6522c3.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/2c3d7c496330a730ac42c3a37cb86f4825f749f5681356234d2f9f1073d69d0b.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/49f598205e34bb29c00fc670b9b69daa4d0a2b9b2ea4244a425f70183d966f6b.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/7f251fa08703a0e375cb1d8cf8ef27424cbb077df329474430b7fbf6df50240e.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/6ea6d9305a26f0a818cf33214d435d1979d51bc89b9f98a7adc159b0560df4cd.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/49be52f15374430f59f27a1295bf959c8fd50767a5749f73e5f5ced479754253.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/a51b6beb0bfd4eb55b90de4b5a66890490e754789458eebacdaa75d52e3094f6.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/5cb9007de601b02333b76ab7e343e6a7296fce3b8d4f75d1f9c1b8f54b4d32b1.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/29e82e88fd73ee37352a6c40647d4d8b3e51a866336cea47848e4b24c2922333.jpg',
            },
          ],
          contactInfo: {
            inquiryPerson: {
              phone: '076 478 81 29',
            },
          },
          isExclusive: false,
          url: 'https://www.homegate.ch/buy/3001653984',
          salePrice: 1520000,
          salePricePerSqm: 12881,
          currency: 'CHF',
          address: {
            postCode: '8046',
            city: 'Z\u00fcrich',
          },
          coordinates: {
            latitude: 47.422871852016,
            longitude: 8.514731307321,
          },
          floorNumber: 4,
          buildingYear: 2008,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_normal',
          },
          livingArea: 118,
          numberOfRooms: 4.5,
          hasLift: true,
          hasParkingSpaces: true,
          isPreciselyLocated: false,
        },
        {
          offerId:
            'f8353143c5491271a5531c5954c4da36f7fce81c7c4af7e48ca4fed85be2c73d',
          dealType: 'sale',
          startDate: '2022-01-31',
          daysOnMarket: 8,
          isActive: true,
          isPrivate: false,
          title:
            'Grossz\u00fcgige 2 \u00bd Zi. Eigentumswg. im 14. OG, mit fantastischem Blick \u00fcber Z\u00fcrich',
          description:
            '**"Hard Turm Park" Z\u00fcrich, zu verkaufen**   \r\n**Moderne, grossz\u00fcgige 2 \u00bd Zimmer Eigentumswohnung**  \r\n**Im 14. OG, mit fantastischem Blick \u00fcber Z\u00fcrich?**  \r\n  \r\nZ\u00fcrich West - vom Industrie- zum Trendquartier - Wo einst Schiffe gebaut und Motoren zusammengeschraubt wurden, findet heute das kunterbunte urbane Leben statt.   \r\n  \r\nDie attraktive Eigentumswohnung liegt im 14. Stock, (S\u00fcd/West Lage) des Hochhauses Hard Turm Park an der Pfingstweidstrasse 98 - im selben Geb\u00e4ude wie das Hotel Sheraton.  \r\n  \r\nDie Wohnung hat einen offenen, sowie modernen Grundriss - sie ist hell und lichtdurchflutet und verf\u00fcgt \u00fcber eine hochwertige Ausstattung.   \r\n  \r\nSie ist ca. 113 m\u00b2 (Nettowohnfl\u00e4che) gross und verf\u00fcgt zudem noch \u00fcber eine Loggia mit ca. 17 m\u00b2.  \r\n  \r\nDie Wohnung besticht durch modernes Design - einer hochwertigen weissen Hochglanz-K\u00fcche "Poggenbohl" mit K\u00fccheninsel und viel Stauraum. Die K\u00fcche ist grossartig ausgestattet mit Steamer, Teppan Yaki Platte, Keramikherd, K\u00fchlschrank, Tiefk\u00fchler, einem Weink\u00fchler - da bleiben keine W\u00fcnsche offen.  \r\n  \r\nDas grossz\u00fcgige Ess- und Wohnzimmer ist lichtdurchflutet und mit grossen Fenstern ausgestattet - es gibt einen Zugang zur sch\u00f6nen, hellen Loggia. Kann herrlich als Terrasse genutzt werden, oder geschlossen als Loggia mit herrlichem Blick auf den Uetliberg und die Stadt Z\u00fcrich...  \r\n  \r\nZudem gelangen Sie vom Wohnzimmer in einen zus\u00e4tzlichen offenen Raumbereich, welcher z.B. als Ankleide oder als ein zus\u00e4tzliches Zimmer genutzt werden k\u00f6nnte.   \r\n  \r\nNeben dem Wohnungseingangsbereich befindet sich noch ein Reduit, einen separaten Raum mit Waschmaschine und Tumbler, sowie ein praktisches G\u00e4stebad mit Dusche.  \r\n  \r\nDas Schlafzimmer verf\u00fcgt einerseits \u00fcber ein Bad en Suite mit Dusche - andererseits \u00fcber eine "freistehende Designer Badewanne", welche sich auf einem leicht erh\u00f6hten Podest befindet - das Highlight dieser aussergew\u00f6hnlichen und tollen Eigentumswohnung, die grosse Badewanne direkt am Panoramafenster - mit Zugang zur Loggia und herrlichem Blick \u00fcber Z\u00fcrich...  \r\n  \r\nZur Wohnung geh\u00f6rt zudem noch ein Parkplatz in der Einstellhalle.  \r\n  \r\n**Sie m\u00f6chten das Stadtleben im modernen Trendquartier Z\u00fcrich West geniessen - in Ihrer eigenen Wohnung im Hochhaus des Sheraton-Hotels, in stilvollem Ambiente und mit einzigartigem Charm - dann ist diese Eigentumswohnung das richtige f\u00fcr Sie.**  \r\n  \r\n**Gerne stehen wir Ihnen f\u00fcr weitere Informationen oder einen Besichtigungstermin zur Verf\u00fcgung und freuen uns auf Ihre Anfrage**  \r\n  \r\n**Ihr ImmoDream.Swiss - Team**  \r\n  \r\n',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/b784be4a15e48720e5d1ad83a976246a24d04108dd35798a152c9cb41f1fd54c.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/e70d6e8130577d7fc1a95b14d8e3bbf287e01cc9acec61937643ef702606bfbf.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/fd07219b0496c233d093b47a4743adb0e9afefbfb76489bcac406bf991f34715.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/c45eeb9da56930ddc18dbdd64248af24913f659a283cb2987e182a47fc7f6808.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/1aef2ac54c74aa5f625551fed8ce414564326ff58dc778df6e2f2a9f9c3d0d24.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/d6fa4db0748a7cbae0cbbfa12e5bc14c2150110d95d057748350d07fe23db2e0.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/26363c199b6b4fd747000272bbfb74db5f5fd56604eaa3b85cf9cecfdb62beef.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/d75bef6b04a549178dcdf5de453a995b3e0a8f7db3c41922cfe2e8bca5a10443.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/f88ef6ca8f77ff3844f8a87ffb0ee5084d3c0c37f400f1acf5d5299bd449291c.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/f49274d1dcfe084ca0bf6b24f74406cd71be6360f3630a957ad649508eebd6af.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/44056eeda4c167b229069c7aa9989ddeafa194a0c3c3453e4868f6aa5d80ee7f.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/ed97bf38cbf67ab0ec447e193a9ebd8731d84d3682cd5e59146c689a5584437c.jpg',
            },
          ],
          contactInfo: {
            webUrl: 'http://www.immowunsch.com',
            isGuest: false,
            logoUrl:
              'https://www.immoscout24.ch/resources/memberlogos/L2112-R.jpg',
            lastName: 'Herr Mike Benz',
            userType: 'M',
            reference: 'Herr Mike Benz',
            companyZip: '6330',
            companyCity: 'Cham',
            companyName1: 'MB Management and Consulting AG',
            companyName2: 'Immobilien Management',
            companyStreet: 'Alte Steinhauserstrasse 33',
            showLogoOnSerp: true,
            isAccountMigrated: true,
            logoUrlDetailPage:
              'https://www.immoscout24.ch/resources/memberlogos/L2112-R.jpg',
            companyPhoneBusiness: '041 780 44 01',
          },
          url: 'https://www.immoscout24.ch/en/d/flat-buy-zuerich/6899439',
          salePrice: 2350000,
          salePricePerSqm: 20796,
          currency: 'CHF',
          address: {
            street: 'Pfingstweidstrasse',
            houseNumber: '98',
            postCode: '8005',
            city: 'Z\u00fcrich, Kreis 5 (Zurich)',
          },
          coordinates: {
            latitude: 47.3907196,
            longitude: 8.5104722,
          },
          floorNumber: 14,
          buildingYear: 2013,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_normal',
          },
          livingArea: 113,
          numberOfRooms: 2.5,
          hasLift: true,
          hasParkingSpaces: true,
          isPreciselyLocated: true,
        },
        {
          offerId:
            '9e8afc87c6716bb89415cc0f9873bbc1b7a42ee1edf059a970de4b8fb3f761d4',
          dealType: 'sale',
          startDate: '2022-01-28',
          daysOnMarket: 11,
          isActive: true,
          isPrivate: false,
          title:
            'Ger\u00e4umige Wohlf\u00fchloase mit atemberaubender Aussicht',
          description:
            '\r\nDieses "Zuhause" mit allem Komfort, l\u00e4sst wenig W\u00fcnsche offen und eignet sich perfekt f\u00fcr Familien sowie auch Paare. Zudem eignet sich die Immobilie auch als Zweitwohnung.   \r\n  \r\nDie sehr gut ausgebaute, sch\u00f6ne und dazu echt preiswerte 4.5 Zimmerwohnung,   \r\nbefindet sich im sonnigen H\u00f6ngg. Eine fantastische Aussicht \u00fcber das urbane Z\u00fcri West auf dem gut platzierten und grossen Balkon, l\u00e4sst jedes Herz h\u00f6her schlagen. Diese Immobilie bietet einiges was man sich w\u00fcnschen w\u00fcrde und sucht daher Eigent\u00fcmer mit Visionen.  \r\n  \r\nZ\u00f6gern Sie nicht lange und profitieren Sie von diesem aussergew\u00f6hnlichen Angebot.   \r\nVereinbaren Sie eine unverbindliche und pers\u00f6nliche Besichtigung.  \r\nHier werden also keine W\u00fcnsche offen gelassen. Profitieren Sie und \u00fcberzeugen Sie sich selbst!\r\nDieses PREMIUM HOMES Angebot bietet:\r\n- Fantastische Aussicht \u00fcber Z\u00fcrich bis in die Alpen\r\n- Ger\u00e4umiger Hobbyraum oder Waschraum\r\n- Doppel-Garagenplatz in der Tiefgarage\r\n- Freundliches Familienquartier\r\n- Ausbauf\u00e4hig mit guter Ausstattung\r\n- Nur eine Wohnung pro Stockwerk\r\n- und, und, und...\r\n\r\n\r\nInteressiert? Gerne f\u00fchren wir Sie durch eine unverbindliche Besichtigung!  \r\nSie wollen Ihr Haus oder Ihre Wohnung sorgenfrei verkaufen?  \r\nWir sagen Ihnen den aktuellen Marktwert Ihrer Immobilie, diskret und unverbindlich!   \r\nHaben Sie Interesse an einem ersten unverbindlichen Gedankenaustausch? Z\u00f6gern Sie nicht und kontaktieren Sie uns.\r\nWir freuen uns auf Sie.',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/660763b5b8ef798c0f1b9d2d0bc49399728055e0d11cb738962257cd54dc01f2.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/685f05f6efb3fefa71290e152f05f2459744ba18b7d581b5e5f5ea2bd9639dcf.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/032cce75674bad3b47cd7d99b71a1af650fe08a822f773b35ad4ea12864092b0.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/d62b2e3d4e8baa976b54723090df63a4c054af3e62a36470a6ec32ec6cf8b5f8.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/9c4e37fabf1ae32869cd4bc0d5fd2b6751b4920341fd97ff33ab5d948cb7dc66.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/0499e5a985005eccda37d7aa59fea8e6ce886ddb80d9cc972601ff6ec9427865.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/e737d15243ef1629d88b1330ae3d682d30ce4ffbe4fefb4acdff47812232d8d8.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/844025ccc11d904781d0601d6679abf89be0be85b7c2359d3c11fa3091c425a7.jpg',
            },
          ],
          contactInfo: {
            webUrl: 'http://www.premium-homes.ch',
            isGuest: false,
            logoUrl:
              'https://www.immoscout24.ch/resources/memberlogos/L2847-R.jpg',
            userType: 'M',
            companyZip: '4563',
            companyCity: 'Gerlafingen',
            companyName1: 'PREMIUM HOMES AG',
            companyStreet: 'Biberiststrasse 4',
            showLogoOnSerp: true,
            isAccountMigrated: true,
            logoUrlDetailPage:
              'https://www.immoscout24.ch/resources/memberlogos/L2847-R.jpg',
            companyPhoneBusiness: '062 535 72 64',
          },
          url: 'https://www.immoscout24.ch/en/d/flat-buy-zuerich/6896689',
          salePrice: 1550000,
          salePricePerSqm: 14091,
          currency: 'CHF',
          address: {
            postCode: '8049',
            city: 'Z\u00fcrich',
          },
          coordinates: {
            latitude: 47.4085272630353,
            longitude: 8.49444351056514,
          },
          floorNumber: 3,
          buildingYear: 1983,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_normal',
          },
          livingArea: 110,
          numberOfRooms: 4.5,
          hasLift: true,
          isPreciselyLocated: false,
        },
        {
          offerId:
            'b48bf8b9ea2947948d1ad6506d6cd7f4ee8e366573b2247d8e6ead46dbd68b9c',
          dealType: 'sale',
          startDate: '2022-01-28',
          daysOnMarket: 11,
          isActive: true,
          isNew: true,
          isPrivate: false,
          title: 'Heidwiesenpark - hier f\u00fchle ich mich zu Hause!',
          description:
            'An der Heidwiesen 15 und 19 in Z\u00fcrich-Schwamendingen entstehen per Fr\u00fchling/Sommer 2023 insgesamt 37 spannende Eigentumswohnungen. Der Baustart ist erfolgt.\nHier zu wohnen verspr\u00fcht pure Freude, denn auf Komfort &amp; Lebensqualit\u00e4t wird grossen Wert gelegt.\n\nDazu einige Vorz\u00fcge in der \u00dcbersicht:\n-\tZentrumsnahe Lage \n-\tGute Verkehrsanbindungen\n-\tUnweit des Naherholungsgebiet\n-\tAttraktive Architektur mit durchdachten Grundrissen\n-\tZeitgem\u00e4sser und moderner Ausbau\n-\tRaumhohe Fenster f\u00fcr optimale Lichteinf\u00e4lle\n-\tErdsondenheizung mit passiven Free-Cooling System im Sommer\n\nZudem wird das Angebot an Aussenfl\u00e4chen (Sitzplatz, Balkon oder Terrasse) bei der Mehrheit der Wohnungen mit einem praktischen Wintergarten abgerundet.\n\nSie m\u00f6chten gerne mehr \u00fcber diesen interessanten Neubau in Erfahrung bringen? Wir freuen uns! \nKontaktieren Sie uns bitte via Kontaktformular. Sie erhalten umgehend die weiteren Informationen zugestellt.\n\nIhr INIZIA-Verkaufsteam',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/019b3efa3f1e5b36d0980b3a667876777e125deef47bcd1de9cefeb66e760d08.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/b35837425d03e629e1062fe5be772bc68a3865e533aa0a5b055f41f071573290.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/6065ae725cab4be260a19308b950fa7d8e5026a573e07b677e849a10ceb3b10e.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/b3c0a1e1fc1a7c4555fb3f036c2c1c413288e98e4648cbdac304e68f0c5784c1.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/79f50c2e984d010e30449fab9b1de22492061f6a6f9e2f41fb373e8efdda4a49.jpg',
            },
          ],
          contactInfo: {
            inquiryPerson: {
              name: 'Michaela M\u00fcller',
              phone: '+41 44 404 78 78',
            },
          },
          isExclusive: false,
          url: 'https://www.homegate.ch/buy/3001646856',
          salePrice: 1120000,
          salePricePerSqm: 11667,
          currency: 'CHF',
          address: {
            street: 'Heidwiesen',
            houseNumber: '15/17/19',
            postCode: '8051',
            city: 'Z\u00fcrich-Schwamendingen',
          },
          coordinates: {
            latitude: 47.4076533,
            longitude: 8.575593,
          },
          buildingYear: 2023,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_normal',
          },
          livingArea: 96,
          numberOfRooms: 3.5,
          hasLift: true,
          hasParkingSpaces: true,
          isPreciselyLocated: true,
        },
        {
          offerId:
            '15e216d5383b66a1a303a6f440fab8217c62e7fab240ea3e18c98986366e650d',
          dealType: 'sale',
          startDate: '2022-01-28',
          daysOnMarket: 11,
          isActive: true,
          isPrivate: false,
          title:
            'Sehr grosse und helle 3.5-Zimmerwohnung an der Stadtgrenze von Z\u00fcrich',
          description:
            "Suchen Sie eine moderne und helle Wohnung mit viel Platz an der Stadtgrenze von Z\u00fcrich? Wir verkaufen diese sehr grossz\u00fcgige 3.5-Zimmerwohnnung in Z\u00fcrich-Seebach mit ca. 100 m2 Wohnfl\u00e4che.\r\n\r\nDiese wundersch\u00f6ne Wohnung \u00fcberzeugt durch eine gekonnte Raumaufteilung. Ein harmonisches Gef\u00fchl erhalten Sie durch die offene K\u00fcche und einer grossen Fensterfront im Wohnbereich. Der gedeckte und ruhige Balkon l\u00e4dt zum Verweilen ein und besitzt einen ger\u00e4umigen Schrank. Zahlreiche B\u00e4ume und Bepflanzungen in der Umgebung geben der Wohnung einen \u00e4usserst sympathischen Charakter. Die ganze \u00dcberbauung hat ein wohnliches und ruhiges Ambiente. \r\n\r\nEin Bad mit Wanne, ein separates WC und eine praktische Garderobe mit Einbauschrank erg\u00e4nzen das durchdachte Raumkonzept. Im Reduit steht ein eigener Waschturm. Der Keller bietet gen\u00fcgend Stauraum. \r\n\r\nDie Bushaltestelle \"K\u00e4shaldenstrasse\" der Linie Nr. 75 befindet sich direkt vor der Haust\u00fcre. Die Bahnh\u00f6fe Seebach und Oerlikon oder auch Z\u00fcrich-Affoltern sind somit innerhalb von wenigen Minuten erreichbar und von dort geht es im Minutentakt ins Stadtzentrum oder zum Flughafen.\r\n\r\nVP CHF 1'160'000.00 \r\n\r\nEin Garagenplatz in der UNG kann f\u00fcr CHF 30'000.00 separat dazu erworben werden.\r\n\r\nF\u00fcr n\u00e4here Information und zur Vereinbarung eines Besichtigungstermines wenden Sie sich bitte an Paul Matter T 079 679 29 49 oder pm@precis.ch",
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/12afff5ac99f4900d1cf326b011d218f6a5aa3aba1f28e44a22a42907cea3d1f.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/c1e77866d75a75f6addf83274f4ec4f0e9e9c072941a2a5209487acd8631f8ba.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/7475bc5a66337ad062b39a0e1e366689ce773ce7f660d3d0a219c941b5173f47.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/7757f7f21b714604115c51a190a1e3d4f152c9b96c13ff63de831f5ab417dabc.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/a3549ab30662b31e556dd871f7b6407861e1718b7ece037f166757dcaa09bd03.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/4d4e42b1db4633d46e8b91ecaa0920754ce2fd50289deaabd5977909e9319f46.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/83d2abe0d311df2143446d387c85211720ff5e03e76204c28fd92ca6a92ce830.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/55c30bdfa2005741124bdc0e74e3a176a4424e0d9c8b4811a75f289da961e76e.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/1bd7f45a03c8f40bedf5e5e3ce5b77508f0dfdacae806afd5e011ac7e46d52af.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/f79e94b8133b9db042dbc10782c2ca2702a2456c984eb9bddbdd29abf2b01221.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/e9d930f0b2122e995393636b2cf1706181563adad5b8e4dd2e96924bc49351c6.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/e95f759c28441bf6ef453d3f742261aef0508f79b83c8a0442ba4dc4bcbb1bbc.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/de0f625699e6fdb160a564ffbe1d9e36ab13fa5bfa1d89f2af0474a7b2a94cd4.jpg',
            },
          ],
          contactInfo: {
            inquiryPerson: {
              name: 'Paul Matter',
              phone: '+41 79 679 29 49',
            },
          },
          isExclusive: false,
          url: 'https://www.homegate.ch/buy/3001646811',
          salePrice: 1160000,
          salePricePerSqm: 11717,
          currency: 'CHF',
          address: {
            street: 'R\u00fcmlangstrasse',
            houseNumber: '70',
            postCode: '8052',
            city: 'Z\u00fcrich',
          },
          coordinates: {
            latitude: 47.429881592231,
            longitude: 8.541371101414,
          },
          floorNumber: 3,
          buildingYear: 2010,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_normal',
          },
          livingArea: 99,
          numberOfRooms: 3.5,
          hasLift: true,
          isPreciselyLocated: true,
        },
        {
          offerId:
            'e50fa6dbfe57608252a7f83605d30b47ec35e2c3d53fa78d63a94328a657ea77',
          dealType: 'sale',
          startDate: '2022-01-25',
          daysOnMarket: 14,
          isActive: true,
          isPrivate: true,
          title: 'Sonnige Wohnung an privilegierter Lage',
          description:
            '<p>Nach Vereinbarung verkaufen wir an Hanglage eine grosse, helle 4,5 Zimmer-Wohnung mit traumhafter Aussicht auf die Limmat und den Uetliberg. Das Naherholungsgebiet an der Limmat ist nur ein paar Meter von der Wohnung entfernt. Zu Fuss sind die Haltestellen der Trams 6, 8 und 13 in 8 Minuten zu erreichen, mit welchen Sie in K\u00fcrze an den HB und das Bellevue gelangen. Die nach S\u00fcden ausgerichtete Wohnung besticht mit einem Innenausbau f\u00fcr hohe Anspr\u00fcche:</p><ul><li><p>grosses Wohnzimmer (39m2)</p></li><li><p>Einbauschr\u00e4nke im Eingangsbereich</p></li><li><p>Reduit</p></li><li><p>Zwei Nasszellen (Bad/WC und Dusche/WC)</p></li><li><p>eigene Waschk\u00fcche mit Waschmaschine und Tumbler</p></li><li><p>Geschirrsp\u00fclmaschine</p></li><li><p>zus\u00e4tzlicher Kellerraum</p></li><li><p>zwei \u00fcbereinander liegende Einstellpl\u00e4tze (sind im Kaufpreis mitenthalten)</p></li><li><p>Balkon</p><p></p></li></ul>',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/b8c2caa64120fc5fdce24f6c29f1212581378719cbdf332d7e67cc519176b6e6.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/a59047ef179f8b40ffaf2519856f106848dd1a38be92471faf7a5f0f3525e832.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/194df0575e31daa32920df2ceb17becfaf057a4dfd4b9a3d627ddb5617bfb011.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/9f63817597744d24e83de4baaeab13f38d0efe69466c3f321a27ca5c882568e7.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/2e7712334e54da2c519d8967052cdbd50488ca7db5c1f2e58a7150ae9fc6ae5f.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/564f5f857af005d7fb79814627b3f76792387a3f2cf5c05c6f9c449104207dda.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/ec0c035786cd6450245bbb81b1d1460a969e2ccd4bf866346106a049c6bd94f6.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/4a98770e3bac5f135a2721ed6356ec637590c8d7b64c7d6f313c9f57402786a2.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/a88c0dfebddac97a6485150ddc38645f3357c28d775ed3208a9f2eeefe4ad9bd.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/a3ac1527ac22f9df824c6c88fb13ba49c4cf11f6bb4a320b26ebcd4e499d4999.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/d0d0f477f55b69884502916db7725f0ebe216781571722a65298d3c7c88d0bde.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/0bcf1b3cdda91b216957b152b1989740f725b1fbea9e47bac60360a591bbfa3c.jpg',
            },
          ],
          isExclusive: false,
          url: 'https://www.homegate.ch/buy/3001642318',
          salePrice: 2290000,
          salePricePerSqm: 18926,
          currency: 'CHF',
          address: {
            street: 'Grossmannstrasse',
            houseNumber: '10',
            postCode: '8049',
            city: 'Z\u00fcrich',
          },
          coordinates: {
            latitude: 47.395501982113,
            longitude: 8.509241221019,
          },
          floorNumber: 1,
          buildingYear: 1998,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_normal',
          },
          livingArea: 121,
          landArea: 121,
          numberOfRooms: 4.5,
          hasLift: true,
          isWheelchairAccessible: true,
          isPreciselyLocated: true,
        },
        {
          offerId:
            '81adff8674d6d89748005006c0e9494cfbacdbceceadf5ad566c0a596533136f',
          dealType: 'sale',
          startDate: '2022-01-20',
          daysOnMarket: 19,
          isActive: true,
          isPrivate: false,
          title: 'ATTRAKTIVE WOHNUNG AM FUSSE DES H\u00d6NGGERBERGS',
          description:
            'Ganz in der N\u00e4he der Limmat verkaufen wir eine tolle Eigentumswohnung mit grosser Terrasse und gr\u00fcner Umgebung. Doch damit der Vorteile nicht genug:  \r\n  \r\n\r\n- Praktischer Grundriss: 112 m\u00b2 Wohnfl\u00e4che verteilt auf 3.5/4.5 Zimmer\r\n- Sehr grossz\u00fcgiger und heller Wohn- und Essbereich mit B\u00fcro\r\n- Grosse Sonnenterrasse mit Steingarten, Bach und Teich\r\n- Moderne, ger\u00e4umige K\u00fcche mit Granitabdeckung und Bartheke\r\n- Umbau in eine 4.5 Zimmerwohnung ohne grossen Aufwand m\u00f6glich\r\n- Diese Immobilie wird im Rahmen eines Bieterverfahrens verkauft\r\n\r\nInteressiert? Weitere Informationen und Bilder zur Immobilie sowie Besichtigungsm\u00f6glichkeiten unter https://www.propertyowner.ch/immobilien/22-13514  \r\n  \r\nWerden Sie heute noch kostenlos Mitglied im Grundeigent\u00fcmer Verband Schweiz und profitieren Sie von den zahlreichen Mitgliedervorteilen: www.propertyowner.ch  \r\n  \r\n- Verbandsmitglieder k\u00f6nnen die vorliegende oder andere Immobilien mit Unterst\u00fctzung unserer Finanzierungsabteilung z.B. f\u00fcr lediglich 0.84% auf 10 Jahre finanzieren.  \r\n  \r\n- Verbandsmitglieder haben Zugang zu unserem Rechtsdienst (30-min\u00fctige kostenlose telefonische Erstberatung).  \r\n  \r\n- Kostenlose, professionelle Immobilienbewertung  \r\n  \r\n- Kostenlose Beratung zur und Berechnung der Grundst\u00fcckgewinnsteuer  \r\n  \r\n',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/590ad8cc242e92ceb71b2119846dc2beccac1183c579b2b43ca9ac50a48f810e.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/dc55b05e759fb53b59e6c56c4b26d0482b30527b898aee32a08cac6cb53e42ed.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/ce2a1fafdd51206708e19833ab728f61b8a81ab585def7676bf5ff6afc7238ff.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/e25c19df3e776f52d3842b4fd6cb02020cce2dbbf698d7b8c9aa7cce06e2e080.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/e71af229da94cd804162169fefcab16bcae1ada9a17e1a321d57b7a6b528cc8c.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/12b5c3e130c5718dd0c78e12619a79f74d450e5e7346256a363c50ed08610507.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/d6c4ae7b7fb94c0e63af515ecd9123c6f01fac5758c20060c84479731bc5cf6a.jpg',
            },
          ],
          contactInfo: {
            webUrl: 'http://www.propertyowner.ch',
            isGuest: false,
            logoUrl:
              'https://www.immoscout24.ch/resources/memberlogos/L1310038-R.png',
            lastName: 'Frau Mireya Estermann',
            userType: 'M',
            reference: 'Frau Mireya Estermann',
            companyZip: '3008',
            companyCity: 'Bern',
            companyName1: 'Grundeigent\u00fcmer Verband Schweiz AG',
            companyStreet: 'Laupenstrasse 1',
            showLogoOnSerp: true,
            isAccountMigrated: true,
            logoUrlDetailPage:
              'https://www.immoscout24.ch/resources/memberlogos/L1310038-R.png',
            companyPhoneBusiness: '058 310 10 30',
          },
          url: 'https://www.immoscout24.ch/en/d/flat-buy-zuerich/6882363',
          salePrice: 1770000,
          salePricePerSqm: 15804,
          currency: 'CHF',
          address: {
            postCode: '8049',
            city: 'Z\u00fcrich',
          },
          coordinates: {
            latitude: 47.4044591,
            longitude: 8.4970328,
          },
          floorNumber: 0,
          buildingYear: 1995,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_normal',
          },
          livingArea: 112,
          numberOfRooms: 4.5,
          hasLift: true,
          hasParkingSpaces: true,
          isPreciselyLocated: false,
        },
        {
          offerId:
            'e2b493d42472620341739b8efdd2793c3ab0ed75a9dd4a8da3e881ef42bb2574',
          dealType: 'sale',
          startDate: '2022-01-20',
          daysOnMarket: 19,
          isActive: true,
          isPrivate: false,
          title: '2 1/2 Zimmer Wohnung',
          description:
            'Wohnen in der Stadt und doch im Gr\u00fcnen.\n\nDie Wohnung im 3. Stock besticht durch die sehr sonnige und ruhige, gegen Nordwest ausgerichtete Lage und den sch\u00f6nen Balkon mit sch\u00f6ner Sicht.\n\nIm Eingangsbereich steht Ihnen ein grosser Einbauschrank zur Verf\u00fcgung. Der Wohn- und Essbereich bietet gen\u00fcgend Platz f\u00fcr Sie und Ihre G\u00e4ste.\n\nDie offene K\u00fcche ist hell und ger\u00e4umig. Aus dem Wohnzimmer gelangen Sie in das Schlafzimmer. Das Badezimmer hat neben der Badewanne ein Lavabo und ein WC. \n\nEin Kellerabteil und die Gemeinschaftswaschk\u00fcche erreichen Sie bequem mit dem Lift.\n\nZus\u00e4tzlich kann ein Aussenparkplatz erworben werden.\n\nDie Schulen, das Zentrum von Seebach mit vielen Gesch\u00e4ften und dem Bahnhof erreichen Sie in wenigen Schritten.\n\nDas Geb\u00e4ude wurde im Jahr 1979 erstellt und laufend renoviert.\n\nDiese Wohnung ist auch bestens als Anlageobjekt geeignet.\n\nIn der gleichen \u00dcberbauung wird im Auftrag des Eigent\u00fcmers gleichzeitig eine weitere 2 1/2 Zimmerwohnung verkauft.',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/ac671df556110565458f714015ae83d2b9dd391566193ccc7d71edbd34b3bd8a.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/66ddbf4ef98ad08bf011e76c8ee6bb58ba12eba4600e3ec1f7d80dbd2b06b72f.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/56ef46e55191bb0ead9095051efef2ec71c4dcdbbfae1f538870c0646a1ae406.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/6737234e34ddb2b77e3988d0253b4b88710b7625a34863751774e7d07c309b3a.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/5897871b845b78904ec0efc042777ceb7f4277bd2c2512f21636e5d2fae9eebe.jpg',
            },
          ],
          contactInfo: {
            inquiryPerson: {
              name: 'Urs Schubiger',
              phone: '+41 79 903 26 22',
            },
          },
          isExclusive: false,
          url: 'https://www.homegate.ch/buy/3001635490',
          salePrice: 650000,
          salePricePerSqm: 12500,
          currency: 'CHF',
          address: {
            street: 'Seebacherstrasse',
            houseNumber: '66',
            postCode: '8052',
            city: 'Z\u00fcrich',
          },
          coordinates: {
            latitude: 47.4231243,
            longitude: 8.5418819,
          },
          floorNumber: 3,
          buildingYear: 1979,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_normal',
          },
          livingArea: 52,
          numberOfRooms: 2.5,
          hasLift: true,
          isPreciselyLocated: true,
        },
        {
          offerId:
            '69ac76afd3ee504613b98c844d67ba4055c197ac61fbd7b7d10f5d88fd5ab3de',
          dealType: 'sale',
          startDate: '2022-01-18',
          daysOnMarket: 21,
          isActive: true,
          isPrivate: false,
          title:
            '3 \u00bd Zi. Wohnung mit 2 Balkonen und Garage im Herzen vom Kreis 6',
          description:
            '**DIE WOHNUNG**Die 3 \u00bd Zi. Wohnung (151m2 WF) im 3. Stock und mit herrlichem Rundblick \u00fcber die Stadt verf\u00fcgt \u00fcber hohe R\u00e4ume und einen loftartigen Grundriss mit 2 abgeschlossenen Zimmern. Zwei kleine Balkone laden im Sommer zum Verweilen im Freien ein; der Garten mit Laube und Grillstelle steht zur Mitbenutzung zur Verf\u00fcgung.   \r\n  \r\n**DER AUSBAU**  \r\nDer gut 80m2 grosse offene Wohn- und Essbereich bietet ein einzigartiges Ambiente. Die mit einem ge\u00f6lten Riemenparkett ausgestattete Wohnung wurde in den letzten 10 Jahren komplett renoviert und mit sehr sch\u00f6nen Materialien ausgestattet. Die Schreiner-K\u00fcche mit weisser Corian-Arbeitsplatte ist mit K\u00fcchenger\u00e4ten von Miele und V-Zug (Backofen, Combi-Steamer, W\u00e4rmeschublade inkl. 80\u00b0 Niedergartemperatur, Geschirrsp\u00fcler, Induktionsherd mit eingebautem Induktions-Wok, K\u00fchlschrank und Tiefk\u00fchler) ausger\u00fcstet und wird hohen Anspr\u00fcchen gerecht.  \r\n  \r\nDas helle Schlafzimmer ist mit einem "Ensuite"-Bad mit Wellness-Dusche ausgestattet. Das eingebaute B\u00fccherregal, die Einbauschr\u00e4nke und ein Reduit sorgen f\u00fcr viel Stauraum. Die privaten R\u00e4umlichkeiten sind mit einer Schiebet\u00fcre abgetrennt. Ein separates G\u00e4stebad mit eigener Waschmaschine ist dem dritten Zimmer zugeordnet. Das Haus und die Wohnung verf\u00fcgen \u00fcber keinen Lift.  \r\n  \r\n**DIE GARAGE UND NEBENR\u00c4UME**  \r\nZur Wohnung geh\u00f6rt eine grosse Einzelgarage im Haus. Ebenso ein Keller. Die allgemeine Waschk\u00fcche mit Trockenraum kann mitbenutzt werden.  \r\n  \r\n**DAS QUARTIER UND DIE \u00d6V-ANBINDUNG**  \r\nDie Wohnung liegt an einer verkehrsberuhigten Quartierstrasse mit 30er Zone und bietet eine gute Anbindung an den \u00f6ffentlichen Verkehr (wenige Gehminuten zu den Tramlinien 7, 15, 11, 14 und Bus Nr. 33\u00b8 ca. 300 Meter bis zum Schaffhauserplatz).  \r\n  \r\n**IHR KONTAKT**  \r\nSind Sie interessiert an dieser nicht allt\u00e4glichen Wohnung? Auf Ihren Wunsch senden wir Ihnen gerne weitere Informationen.  \r\n  \r\n  \r\n  \r\n',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/3c80dbed913c84084a0d71c1b9d72a82d175fd1715a4f6504c6369fe8688d5f8.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/6c764f90313339485e6a58e70ef0bf5f501b94ec6a6eb9b52ee66483cc90f5f1.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/bbfacd3d7335e05cfa2f6552ce296ac64fb477d0d35d07c318e8906070ef9b60.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/892cb8cfec2af9ef0afcfdb70a9e0aa70fa17c6ca869f45367a265d0fd8f218a.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/1d0147794b98e5b32b3c412e08ce5e7a699176aeff62e8e72dbada9557e41b39.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/4bcf24cc7b51c0a10c41469c01e4cca2c72609b894650af702f1d6fcd560dee5.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/4b26cbfed879b7c7e459dcde447bf7b252dfd5cc601bce604479005f4c624426.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/fbb5d5dabbdd18b93281d5f79fb3e05b94a4d064ec73a4d6f6eacc313683a906.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/243989dadf2112a336ba6250a2f6e5f794744570a69840da877271a3e79b4449.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/18d8152e3503068047efd10624f6136a8cb6aa9f997a65849c9784e1456953a3.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/6e2812b38883b9b4413c6efe1e2ee8a4f95ab67bceb04bf278556983dfeac3fd.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/dc939066694d1826f8350da7317a346544e9378d39daa399b65a171ab1059e54.jpg',
            },
          ],
          contactInfo: {
            isGuest: false,
            logoUrl: '',
            lastName: 'Stefan Stadler',
            userType: 'M',
            reference: 'Stefan Stadler',
            companyZip: '8008',
            companyCity: 'Z\u00fcrich',
            companyName1: 'MSW IMMOBILIEN AG',
            companyStreet: 'Seefeldstrasse 277',
            showLogoOnSerp: false,
            isAccountMigrated: true,
            logoUrlDetailPage: '',
            companyPhoneMobile: '079 400 70 60',
            companyPhoneBusiness: '079 400 70 60',
          },
          url: 'https://www.immoscout24.ch/en/d/flat-buy-zuerich/6877570',
          salePrice: 2890000,
          salePricePerSqm: 19139,
          currency: 'CHF',
          address: {
            street: 'Langmauerstrasse',
            houseNumber: '10',
            postCode: '8006',
            city: 'Z\u00fcrich, Kreis 6 (Zurich)',
          },
          coordinates: {
            latitude: 47.3888303,
            longitude: 8.5414279,
          },
          floorNumber: 3,
          buildingYear: 1929,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_normal',
          },
          livingArea: 151,
          numberOfRooms: 3.5,
          isPreciselyLocated: true,
        },
        {
          offerId:
            'f8f5ac38df0878567286fda385f1373b4909c48c96bedd12ee108debf1947f40',
          dealType: 'sale',
          startDate: '2022-01-18',
          daysOnMarket: 21,
          isActive: true,
          isPrivate: false,
          title: 'Hochkar\u00e4tiger als es den Schein macht',
          description:
            'Es scheint was niedliches zu sein, doch es ist mehr als das. Dieses 2.5 Zimmer-Raumwunder, an einer sehr wenig befahrener Nebenstrasse, ist an Qualit\u00e4t kaum zu \u00fcbertreffen.  \r\nGleich beim Eingang befindet sich die Nasszelle mit Toilette und Dusche. Vor dem grossfl\u00e4chigen Ess- und Wohnbereich befinden sich die K\u00fcche und das ger\u00e4umige Schlafzimmer.  \r\nHat es f\u00fcr Sie ein Schlafzimmer zu wenig? Mit ein bisschen Vorstellungsverm\u00f6gen sieht man schnell, dass auf diesen 105 Quadratmeter einen 3.5 oder sogar einen 4.5 Zimmer-Traum realisiert werden kann.  \r\n  \r\nDieses ImmoSky-Angebot bietet Ihnen folgenden Mehrwert:  \r\n  \r\n+ Glasfaseranschluss  \r\n+ Sehr zentral gelegen  \r\n+ Kein Durchgangsverkehr  \r\n+ Verwirklichen Sie sich  \r\n+ Hohe Bauqualit\u00e4t  \r\n+ Tiefgaragenplatz vorhanden  \r\n  \r\nNat\u00fcrlich geh\u00f6rt zu diesem Bijou ein Kellerabteil in der eine Waschmaschine sowie ein Tumbler steht.  \r\nEin Autoabstellplatz in der gr\u00f6sse eines Behindertenparkplatz sowie ein Motorrad-Abstellplatz sind im Preis inbegriffen. Zus\u00e4tzlich k\u00f6nnen noch zwei weitere Motorradpl\u00e4tze dazu gekauft werden.  \r\nHaben wir Ihr Interesse geweckt. Wir freuen uns auf Ihren Anruf.  \r\n',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/db702791a938253cb540171d5e1ce1c7fcfaa61c3d4ec34667b53319e2eb0b62.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/600f92970b1cfb6c02c813fff80f851dfc987286123db6f8633b4fcd70290ce4.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/e44db24687c06ff211163de8f0746c0cf1dce833f312182d0d4555a8419c1f63.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/f3b2ffa919fad05d1bd41c0f2ae75742c4b188167bf6599c7921528d7a4128ae.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/3392d8b4d0e5420ce21caae21bab37cdb107341ffee2e71b3b241d05a21773fe.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/9cdcc21a13a341800bb5acb692d1f43176642afc6e8df480aca9f3ae2d2fe384.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/7f399b3d4bf61e51b4e78346d9eb5aca314a24eaf87816b59d279576dda0ac3d.jpg',
            },
          ],
          contactInfo: {
            webUrl: 'http://www.immosky.ch',
            isGuest: false,
            logoUrl:
              'https://www.immoscout24.ch/resources/memberlogos/L5861-R.jpg',
            lastName: 'Davide Suriano',
            userType: 'M',
            reference: 'Davide Suriano',
            companyZip: '8600',
            companyCity: 'D\u00fcbendorf',
            companyName1: 'ImmoSky AG - D\u00fcbendorf',
            companyStreet: 'Lagerstrasse 14',
            showLogoOnSerp: true,
            isAccountMigrated: true,
            logoUrlDetailPage:
              'https://www.immoscout24.ch/resources/memberlogos/L5861-R.jpg',
            companyPhoneBusiness: '044 534 60 08',
          },
          url: 'https://www.immoscout24.ch/en/d/flat-buy-zuerich/6876277',
          salePrice: 990000,
          salePricePerSqm: 9429,
          currency: 'CHF',
          address: {
            postCode: '8051',
            city: 'Z\u00fcrich',
          },
          coordinates: {
            latitude: 47.4008593,
            longitude: 8.5781373,
          },
          buildingYear: 2016,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_normal',
          },
          livingArea: 105,
          numberOfRooms: 2.5,
          isWheelchairAccessible: true,
          isPreciselyLocated: false,
        },
        {
          offerId:
            'da46710489bb868639b2dbf2cc67042930c2035dd3cd5d08db8c9918b4a21605',
          dealType: 'sale',
          startDate: '2022-01-17',
          daysOnMarket: 22,
          isActive: true,
          isPrivate: false,
          title: 'Ruhiges, freistehendes Stadthaus mit Einliegerwohnung',
          description:
            'Diskret und ruhig in der zweiten H\u00e4userreihe geniesst dieses freistehende Einfamilienhaus eine bevorzugte Lage im begehrten Hirslanden-Quartier.\n\nDas familienfreundliche Platzangebot von insgesamt ca. 195 m\u00b2 Wohnfl\u00e4che umfasst im EG und OG das Haupthaus mit 5.5 Zimmern und auf der unteren Gartenebene eine 2.5-Zimmer-Einliegerwohnung - ideal f\u00fcr autonome Familienmitglieder, zum Vermieten oder um das eigene Gesch\u00e4ft unter einem Dach zu vereinen. \n\nDas vielf\u00e4ltig nutzbare Eigenheim wurde 1983 erbaut, 2006/7 im Innern teilrenoviert und pr\u00e4sentiert sich in sehr gepflegtem Zustand. Einige geringf\u00fcgige Auffrischungen gen\u00fcgen, damit sich eine neue Familie und eventuell weitere Angeh\u00f6rige hier picobello einrichten und wohlf\u00fchlen k\u00f6nnen.',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/f915a1d4d00800f904621cff0d758e1fab7e57d8afdbea3aaa2dba1560379019.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/abffc8db143355b712724b63bf075b46281b60dd0c8d392268d0187c9f6d105a.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/0380d0b2506dafb5865122d8383065ecda8e318e60f518cfd8bc88aea6e32d0a.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/56a1a4fd3a18c1fa5b4fc04d884e3841dda4a24de5e74509149524741326a9e4.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/5aa17cd74db1aa623903a3cd3c8b4fefcc526f407041147bb924b73142f78f70.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/1d6d11975700ce4cc24c2f9b8e04dd2698a8c05139eabc35a6b9b0368016e7c3.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/2f567db88675f05fb30b08f066d03195601eeaad86f189aa2b00cc3b2bc918a4.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/4b2b2c5af5b353892775f91ca49dfff336ba0b9ccab07afc0440b08fce4627ba.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/10b5107cb3adf0ee9124c72a82a1b7811a7fd7f0a21562828308a18e99634ab4.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/5b5d626152211c31aad74cff33eb690838bfff788a84cb52f52f3a33cb028083.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/55526cc89b9e8a5ed9564f56f7ae015cd8d8d95b30d7ed1c8efac63cdebff058.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/79c334e4a8e2b2426f48115929419b29f45305f0070e6572fa82f3b5ddd335f9.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/273b2e0190b508c0bf18725d69c40dcf9282f6ea6b8c0a2ee21e15df13da6f0d.jpg',
            },
          ],
          contactInfo: {
            inquiryPerson: {
              name: 'Mihaela Philipp',
              phone: '+41 44 396 60 71',
            },
          },
          isExclusive: false,
          url: 'https://www.homegate.ch/buy/3001626867',
          salePrice: 4120000,
          salePricePerSqm: 21128,
          currency: 'CHF',
          address: {
            postCode: '8032',
            city: 'Z\u00fcrich',
          },
          coordinates: {
            latitude: 47.3671055,
            longitude: 8.5679249,
          },
          buildingYear: 1983,
          propertyType: {
            code: 'house',
            subcode: 'house_detached',
          },
          livingArea: 195,
          landArea: 324,
          numberOfRooms: 5.5,
          hasParkingSpaces: true,
          isPreciselyLocated: false,
        },
        {
          offerId:
            '915bba627a263bac71511ff004268b14de56498e4000983ccb3b8cf169599489',
          dealType: 'sale',
          startDate: '2022-01-17',
          daysOnMarket: 22,
          isActive: true,
          isPrivate: false,
          title: 'NEUWERTIG, IN RUHIGEM WOHNQUARTIER',
          description:
            "An ruhiger Lage verkaufen wir diese sch\u00f6ne und modern ausgebaute Wohnung mit einer hochwertigen, offenen K\u00fcche mit einem Foodcenter, Induktionskochfeld und Steamer. Auf der Sonnenterrasse geniessen Sie die Tages- und Abendsonne. Diese Wohnung verf\u00fcgt \u00fcber einen dunklen, edlen Plattenboden im Wohnbereich sowie Parkettboden in den Zimmern. Die ganze Wohnung ist lichtdurchflutet durch die grossen Fensterfronten. Hier kommen Sie in den Genuss von zwei modernen Badezimmer sowie einem separaten Reduit mit Waschmaschine und Trockner. Dieser moderne Wohnblock verf\u00fcgt \u00fcber einen Lift von der Tiefgarage bis vor die Wohnung.\nDieses BETTERHOMES-Angebot zeichnet sich durch folgende Vorteile aus:\n- neuwertig mit Baujahr 2014\n- Plattenboden im Wohnbereich / Parkettboden in den Zimmern\n- offene, moderne K\u00fcche mit Foodcenter\n- freistehender Induktionsherd / Backofen und Steamer\n- grosse Fensterfronten und helle R\u00e4umlichkeiten\n- zwei Badezimmer\n- Reduit mit Waschmaschine/Tumbler\n- Einbauschr\u00e4nke\n- Tiefgaragenplatz \u00e0 CHF 35000.-\n- Lift\nInteressiert? Kontaktieren Sie uns f\u00fcr eine unverbindliche Besichtigung!\nNichts Passendes gefunden? \u00dcber 2'700 weitere Angebote unter: www.betterhomes.ch - der Immobilienfairmittler\u00ae\nSelber eine Immobilie zu vermarkten?\nProfitieren Sie von unserem Know-how: https://www.betterhomes.ch/de/profitieren\nSie m\u00f6chten eine Immobilie sch\u00e4tzen lassen?\nErfahren Sie jetzt ihren Wert \u00fcber unsere Gratis-Sch\u00e4tzung, sofort und unverbindlich!\nhttps://www.betterhomes.ch/de/knowledge/estimation\nMehr Details\nLage: ruhige Wohnlage, gute Verkehrsanbindung\nZustand: neuwertig\nB\u00e4der / Nasszellen: 2 (1x Badewanne/WC/Lavabo, 1x Duschkabine/WC/Lavabo)\nHeizsystem: W\u00e4rmepumpe\n\u00d6ffentliche Verkehrsmittel: Bus, 130m\nSchulen: Schulhaus Buchwiesen, 650m / Kindergarten, 950m\nGesch\u00e4fte: Denner, 650m / Coop, 950m",
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/mrkrabs/images/full/67b8fc46b43309f33b2247251e5bac322b9bbb116b80ec094b145015a2885f37.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/mrkrabs/images/full/c948402438205006a27ea518de3fcb20ed21dc40eb778135e022efbec722a28a.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/mrkrabs/images/full/5f1c9834af0636c5709a5ec575d618a2e8e56075069e42efad8953fab2032e4c.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/mrkrabs/images/full/1d4b1fd15a222a67cc1e7f3543878970adc3afa3efbeeffa5a1922194782c8ce.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/mrkrabs/images/full/ef0d2b79b436f54fd51efc4eeaa23035a3b74a0b6c36a6666783c0fdd032dd63.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/mrkrabs/images/full/300a41bbd911a040b830d1d7cf78e9760e199fb7062cef871fa07c68269e9a73.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/mrkrabs/images/full/0708c7fc21bbc7c59e25fd4dee5cb4f48fa04177908d0ea2ddf4807bd2b39842.jpg',
            },
          ],
          contactInfo: {
            agency_name: 'BETTERHOMES (Schweiz) AG',
            contact_number: '+41766066710',
            contact_person: 'Herr Pascal Kaeser',
          },
          isExclusive: false,
          url: 'https://www.immobilier.ch/en/buy/apartment/zurich/zurich/betterhomes-schweiz-ag-611/new-in-quiet-residential-area-676834',
          salePrice: 1265000,
          salePricePerSqm: 13750,
          currency: 'CHF',
          address: {
            postCode: '8052',
            city: 'Z\u00fcrich',
          },
          coordinates: {
            latitude: 47.4229177,
            longitude: 8.5433239,
          },
          floorNumber: 1,
          buildingYear: 2014,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_normal',
          },
          livingArea: 92,
          numberOfRooms: 3.5,
          hasLift: true,
          isWheelchairAccessible: true,
          isPreciselyLocated: false,
        },
        {
          offerId:
            'b1b4f28bb49223da946bb131f189505281acbd685af212e23f1cf37720a8c12b',
          dealType: 'sale',
          startDate: '2022-01-14',
          daysOnMarket: 25,
          isActive: true,
          isPrivate: true,
          title:
            '4\u00bd rooms Maisonette in 8052 Z\u00fcrich  \u2013 Property Market by comparis.ch',
          description:
            "Grossz\u00fcgige Dachwohnung <br><br>In absolut ruhiger und doch zentraler Lage in Z\u00fcrich Seebach steht diese attraktive 4 1/2 Zimmer Dachwohnung mit einer Galerie zum Verkauf. Das im 2003 erstellte Mehrfamilienhaus mit Tiefgarage liegt an einer Sackgasse. S\u00e4mtliche Gesch\u00e4fte des t\u00e4glichen Bedarfs liegen in der N\u00e4he. Tram- und Busstation (Richtung Flughafen o. Bahnhof Oerlikon) sind in ein paar Gehminuten erreichbar.<br><br>Diese Eigentumswohnung punktet durch folgende Attribute:<br><br>- grossz\u00fcgiger und origineller Grundriss (mit Galerie)<br>- separater Waschraum in der Wohnung im Obergeschoss<br>- grosser Hobbyraum/Estrich im Obergeschoss<br>- offene und helle K\u00fcche mit Foodcenter<br>- windgesch\u00fctzte Loggia<br>- viel Stauraum und Einbauschr\u00e4nke<br>- zus\u00e4tzlicher Keller im UG / Lift<br>- ein Tiefgaragenplatz im Verkaufspreis inkl.<br>- Chemin\u00e9e Einbau m\u00f6glich<br><br>Top Lage in Z\u00fcrich Seebach:<br><br>- ruhig und zentral<br>- an einer Sackgasse (gen\u00fcgend blaue Zonen)<br>- Schule und Kindergarten um die Ecke (ideal f\u00fcr Kinder)<br>- \u00d6V (Tram und Bus) in der N\u00e4he<br>- Einkauf, div. Gesch\u00e4fte<br>- Freibad Seebach (300m) /Tennisclub<br>- usw.<br><br>Verkaufsrichtpreis: Fr. 1'790'000.-<br><br>Haben wir Ihr Interesse geweckt, dann verlangen Sie die Verkaufsunterlagen oder rufen Sie uns an.<br><br><br><br>",
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/batman/images/full/40a52adf931c2c4e79f361a0c305e406036c0a64eee6077b5302d34ed17122bc.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/batman/images/full/e7294d5eff67b880217786f30ee4438a244ad56bd69d19be06fbc2cfc1cdf864.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/batman/images/full/54b34139bc6341e00264ed1a76d3ae043ab95415b3498efa6af4e2ffbe622281.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/batman/images/full/0780f895926911806e68806725f1095ed6edafdddcb11db35d22d1694b5f0933.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/batman/images/full/477daee704d6c41474d66ea2286926c77fe5f8774c3a6bee6286621793f60abe.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/batman/images/full/41063e28087d7e2c7f9865ef6bc560dd812991631875b45988853da825731ac4.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/batman/images/full/5cfdf48b5cf4a8eb84199f6efc48ada804065724fcef87f2d04fed68255d84f4.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/batman/images/full/a5c3cc8281ba3e018aa70bd8afc3d0f24590a2ed8f326e200d1cd884d40f8901.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/batman/images/full/d0d3e5811fdc0be6714c627172430fd8f169a0b51e14208674ee1baf597ec7fd.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/batman/images/full/68b7979b7fa6310257301815edc70909561f99403bab872f479b676226616a17.jpg',
            },
          ],
          isExclusive: false,
          url: 'https://en.comparis.ch/immobilien/marktplatz/details/show/27052864',
          salePrice: 1790000,
          salePricePerSqm: 14320,
          currency: 'CHF',
          address: {
            street: 'Z\u00fcrich',
            houseNumber: '8052',
            postCode: '8052',
            city: 'Z\u00fcrich',
          },
          coordinates: {
            latitude: 47.4232822437184,
            longitude: 8.54226338138151,
          },
          floorNumber: 3,
          buildingYear: 2003,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_maisonette',
          },
          livingArea: 125,
          numberOfRooms: 4.5,
          hasLift: true,
          isPreciselyLocated: true,
        },
        {
          offerId:
            'd969e4344947ebbc34414e3b74b6996f1a876c9c0c1f2bee8c1b932c3c6b03ed',
          dealType: 'sale',
          startDate: '2022-01-11',
          daysOnMarket: 28,
          isActive: true,
          isNew: false,
          isPrivate: true,
          title: 'Dachgeschosswohnung mit s\u00fcdlichem Flair und Charme',
          description:
            '<p>Mitten im Gr\u00fcnen - ruhig, hell, sonnig, mit Aussicht und Garten im Stockwerkeigentum, Segantinistrasse 129, 8049 Z\u00fcrich-H\u00f6ngg</p><p>In 13 Minuten Mitten im Kultur- und Trendquartier Z\u00fcri West. In 300 Metern Entfernung befindet sich ein kleiner Lebensmittelladen. Wenige Gehminuten weiter befindet sich das Dorfzentrum H\u00f6ngg mit Coop, Migros, B\u00e4ckerei, Apotheke etc. Die Bushaltestelle \u201eSinglistrasse\u201c ist zu Fuss in 3 Minuten zu erreichen. Fahrtdauer bis \u201eEscher-Wyss-Platz\u201c 13 Minuten, bis \u201eCentral/HB\u201c 18 Minuten.</p><p>Die Wohnung, totalrenoviert (2021) und auf neuestem Standard, ist Teil eines Siebenfamilienhauses aus dem Jahre 1956. Die Liegenschaft bietet enorme Wohnqualit\u00e4t. Die Segantinistrasse ist keine Durchgangstrasse und ist ausserdem auf der R\u00fcckseite des Hauses. Es gibt also keinen Verkehrsl\u00e4rm und ferner auch keinen Flugl\u00e4rm. Die Geb\u00e4udefl\u00e4che entspricht lediglich 17 Prozent des Grundst\u00fccks (1200qm). Auf der S\u00fcdseite des Hauses befindet sich ein grossz\u00fcgiger Garten. Die Gartenanlage ist eingewachsen mit altem Baumbestand und besteht aus einer Vielfalt ausschliesslich einheimischer Pflanzen. Ein weitl\u00e4ufiger Holztisch und eine Grillanlage k\u00f6nnen von allen Mitbewohnern jederzeit ben\u00fctzt werden.</p><p>Die Umbaugestaltung folgt einer sachlich modernen \u00c4sthetik und wurde mit Sinn f\u00fcr Details realisiert. Zimmert\u00fcren, Dachfenster und K\u00fcchengestelle wurden in sorgf\u00e4ltiger Massarbeit von Hand angefertigt. Die Wohnung ist sehr hell, aufgrund der Dachfenster und der z. T. weissen B\u00f6den. Durch das K\u00fcchenfenster blickt man durch Baumwipfel hindurch auf die Stadt Z\u00fcrich hinunter.</p><p>In der Wohnung hat es einen Wasch- und Lagerraum (7.5qm) (W\u00e4schetrockner und Waschmaschine einzeln) sowie einen Einbauschrank, zus\u00e4tzlich geh\u00f6rt ein Stauraum (3qm) im Eingangsbereich, zur Wohnung. Ein Veloraum befindet sich im Untergeschoss.</p><p>Es hat zahlreiche Parkpl\u00e4tze (blaue Zone) direkt vor dem Haus.</p><p></p>',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/f1064bd5fbc481f9bcabb393fb6d914843e9621bf70408b2e552c17030644012.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/09ff6d1e09e9de2fc2365532588d5e05715056fdbe0860d90186e62ffb05b15c.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/ffe842112099d12ddcab6701971571a52a37d8ca61bb529bddd8949081ab6987.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/518b79158e8e45d6d72c73c25fec8ecf1b3ff20a85bca4dd40c0a601807e6f26.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/a21222c6f00d3440ba0b0857250fa5baa0f708d6175063134cd4695d1764df1d.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/16f8a634141d4cc48f18d7573e466457312e4eabb9172b7798621b2d703aa4b2.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/7160ecc9a84bda4d8789c56d24ca366de9adfa6e31c5e78efd2354af7e24f9d1.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/dce7683364a032c2e500164398b129eceb361e25050efec7987b7780a9079c11.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/beddce3acc9bceddfd041e1b9f5227eba9225423425922541db0f13f1e46de9c.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/39d23c54b0806b498197cf0333e41230b86c0f53293e36bbd3777553225aa91b.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/0469a7af2cca6b4f796036d732137cf680cf43f8425d5ed50200b3958db534a8.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/8671f1445828ffb0619a33ff6aa36c5bfdc05bd1c6b463165141aaada00e146b.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/9227224aa44fc5dc0d75720b39915234fe1b7f13a1e7df7713b699d17b2e93eb.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/da8ef97c7fb836e0fb941cab2635adc6ff0d298711839aae60206b1a77958dfb.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/e47bc3d4d48992ea8efe4e9888ff20b80cf56235c88de3737f211d01f5ea655e.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/b6deb54ded1d85488b1f314ad9b431a5a6da1b319972369bbf9be63ee2873d1b.jpg',
            },
          ],
          isExclusive: false,
          url: 'https://www.homegate.ch/buy/3001385355',
          salePrice: 1200000,
          salePricePerSqm: 14815,
          currency: 'CHF',
          address: {
            street: 'Segantinistrasse',
            houseNumber: '129',
            postCode: '8049',
            city: 'Z\u00fcrich',
          },
          coordinates: {
            latitude: 47.406841852019,
            longitude: 8.493151301697,
          },
          floorNumber: 2,
          buildingYear: 1956,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_attic',
          },
          livingArea: 81,
          numberOfRooms: 2.5,
          isPreciselyLocated: true,
        },
        {
          offerId:
            '77fbcbe501c7360dbb543ac25891b7403b5c668787309ab70eaf2d4c65f92251',
          dealType: 'sale',
          startDate: '2022-01-11',
          daysOnMarket: 28,
          isActive: true,
          isPrivate: false,
          title:
            'L\u00f6wenbr\u00e4u-Areal: Prestige-Wohnung im 17. Stock mit Traumaussicht',
          description:
            'Mit der Liftfahrt in den 17. Stock steigt die Vorfreude aufs Ankommen daheim. Denn an der Aussicht vom Z\u00fcrichberg \u00fcber den See zum Uetliberg und den weiteren Hochh\u00e4usern im Quartier wird man sich niemals sattsehen. Zudem lebt man hier mit der Sonne, die im Verlauf des Tages gem\u00e4chlich die Wohnung umkreist.\n\nEin Traum ist auch die 4.5-Zimmer-Wohnung selber, die mit 172 m2 Wohnfl\u00e4che und hochwertigem Ausbau mit Schlossdielen-Parkett, mit Crema d\u2019Orcia Nasszellen und einer topausgestatteten Bulthaup-K\u00fcche ein privilegiertes Leben an bester City-Lage erm\u00f6glicht. Besonders geniesst man das im Wohn-/Essbereich, in dem sich zwei grosse Fenster nach oben schieben lassen. So entsteht ein edles Loggia-Gef\u00fchl mit dem Hauch der grossen weiten Welt. Der Masterbedroom verf\u00fcgt \u00fcber ein Bad en Suite, ein Schlafzimmer \u00fcber eine Dusche en Suite und f\u00fcr G\u00e4ste steht ein separates WC bereit. Das vierte Zimmer l\u00e4sst sich ideal als B\u00fcro, Atelier oder Fitnessraum nutzen. Stauraum bieten das Reduit und der 10 m2-Keller.\n\nDie Liegenschaft hat eine Erdsonden-W\u00e4rmepumpe mit W\u00e4rmeverteilung \u00fcber die Bodenheizung, im Sommer wird der Boden gek\u00fchlt. Zwei Tiefgaragenpl\u00e4tze k\u00f6nnen mitgekauft werden. \n\nSind Sie bereit f\u00fcr das moderne City-Life? Wir freuen uns auf Ihre Anfrage.\n\nDie Immobilie:\n\n\u2022\t4.5-Zimmer Wohnung im begehrten Z\u00fcrcher Kreis 5\n\u2022\tAuf der 17. Etage des Prestige-Objektes "Black Tower" auf dem L\u00f6wenbr\u00e4u-Areal\n\u2022\tTraumhafte Aussicht \u00fcber die Stadt und bis zu den Bergen\n\u2022\tGanzt\u00e4gig besonnt\n\u2022\tWohnfl\u00e4che ca. 172 m2\n\u2022\tNebenfl\u00e4chen ca. 15 m2\n\u2022\tTop-Ausbau mit Schlossdielen-Parkett, Bulthaup-K\u00fcche und Crema d\u2019Orcia-Nasszellen\n\u2022\tErdsonden-W\u00e4rmepumpe mit W\u00e4rmeverteilung \u00fcber Bodenheizung, im Sommer wird der Boden gek\u00fchlt\n\u2022\t2 Tiefgaragenpl\u00e4tze \u00e0 je CHF 85\'000\n\nBaujahr: 2013',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/7b19a9152d3eebb75a29188d297ba24efbe128ddcccc99c89462f5fc5a3150fc.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/377d5f7a560184510deb2cd0e4097f1dda56478d90792e914b44a3bfbe866037.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/b3599048e89096013f08d42894b484d816215d121941eb526c0e466b7f7323a6.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/8752ac0e2e7262ea8ebb6b4b373f397adaa69422d1cb110ddbbc1919b0d5e016.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/0cb1d8359bdb62042679e199dac5443125d621a7660f76bb336f46a69140c250.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/d6c8d5273734aaca565f0a24518765cd404c7be301da06e95de671c444eddd1b.jpg',
            },
          ],
          contactInfo: {
            inquiryPerson: {
              phone: '044 910 77 33',
            },
          },
          isExclusive: false,
          url: 'https://www.homegate.ch/buy/3001246776',
          salePrice: 3900000,
          salePricePerSqm: 22674,
          currency: 'CHF',
          address: {
            postCode: '8005',
            city: 'Z\u00fcrich',
          },
          coordinates: {
            latitude: 47.389321852017,
            longitude: 8.513151298907,
          },
          buildingYear: 2013,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_normal',
          },
          livingArea: 172,
          numberOfRooms: 4.5,
          hasLift: true,
          isPreciselyLocated: false,
        },
        {
          offerId:
            '1de1d530cbac9ea65cec7133770398f8849dbf7c4b9e548b24afd1fd9faa4c32',
          dealType: 'sale',
          startDate: '2022-01-11',
          daysOnMarket: 28,
          isActive: true,
          isPrivate: true,
          title:
            '11 rooms Villa in 8006 Z\u00fcrich  \u2013 Property Market by comparis.ch',
          description:
            'Hier bietet sich die sehr seltene Gelegenheit eine representative Liegenschaft hoch \u00fcber Z\u00fcrich k\u00e4uflich zu erwerben.<br><br>Aus Gr\u00fcnden der Diskretion, weitere Infos nur an Kapital starkes Klientel mit klar erkennbarer Identit\u00e4t.<br><br>Erstkontakt bitte per Email.<br><br>________________________________________<br><br>This is a very rare opportunity to purchase a representative property high above Zurich.<br><br>For reasons of discretion, further information is only available to a strong clientele with a clearly recognizable identity.<br><br>First contact please by Email.<br><br><br><br>',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/batman/images/full/92122378695e717a8a415bd592cc4a777b79e0ccd48a6d28263cf6ba98c0504c.jpg',
            },
          ],
          isExclusive: false,
          url: 'https://en.comparis.ch/immobilien/marktplatz/details/show/27037028',
          salePrice: 14500000,
          salePricePerSqm: 26364,
          currency: 'CHF',
          address: {
            street: 'Z\u00fcrich',
            houseNumber: '8006',
            postCode: '8006',
            city: 'Z\u00fcrich',
          },
          coordinates: {
            latitude: 47.3886165876987,
            longitude: 8.54399612859298,
          },
          buildingYear: 1911,
          propertyType: {
            code: 'house',
            subcode: 'house_detached',
          },
          livingArea: 550,
          numberOfRooms: 11.0,
          hasParkingSpaces: true,
          isPreciselyLocated: true,
        },
        {
          offerId:
            'c0a2b60ae5f18c7e33d3df67ce97f9242bc93a86f853ec840843f76905f8a650',
          dealType: 'sale',
          startDate: '2022-01-10',
          daysOnMarket: 29,
          isActive: true,
          isPrivate: false,
          title: 'Garten-Maisonettewohnung an bester Wohnlage in H\u00f6ngg',
          description:
            'An bester H\u00f6ngger Wohnlage befindet sich die grossz\u00fcgige Wohnanlage mit 18 gepflegten Eigentumswohnungen. Unmittelbar an den Wanderweg grenzend und doch mitten im Ortskern, welcher bequem in weniger als drei Gehminuten zu erreichen ist. Die Infrastruktur H\u00f6nggs \u00fcberzeugt. Ob Einkauf (Migros und Coop) \u00fcber Schulen (an der Ferdinand-Hodler-Strasse), direkte Busverbindungen zum Hauptbahnhof Z\u00fcrich oder beliebte Restaurants, ist alles vorhanden. Die H\u00f6ngger sind zu Recht stolz auf Ihren Stadtteil. Es lebt sich urban mit l\u00e4ndlichem Touch im Kreis 10.\r\n\r\nDas 1980 erstellte Geb\u00e4ude mit klaren Linien, ist Ausdruck der damaligen Architektursprache, welche durch eine schn\u00f6rkellose, stringente Gestaltung unterstrichen wird. Gut zu sehen ist dies am grossz\u00fcgigen Entr\u00e9e im Eingangsbereich des Hauses. \r\n\r\nDie Wohnung \u00fcberzeugt durch einen durchdachten Grundriss. Wohn- und Esszimmer sowie Balkon sind gegen S\u00fcden ausgerichtet und bieten eine atemberaubende Sicht \u00fcber die ganze Stadt Z\u00fcrich, den See und die Alpen. Die gross geschnittenen Zimmer sorgen f\u00fcr lichtdurchflutete R\u00e4ume. Zudem verf\u00fcgen alle drei Badezimmer bereits \u00fcber Bodenheizungen. Ein lauschiger Garten mit \u00fcberdecktem Sitzplatz, ein grosser Keller sowie ein klimatisierter Weinkelle, runden das einmalige Angebot ab.\r\n\r\nHier findet man alles, was das Herz begehrt.',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/5b4d7161c586cfa0a6066b7d55df6d9443470cd619b2b8c1783e7853401525ac.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/011e3c131a782b175a2d4041161e75875bb2736fe3cc511d05ac17b09b5ff5ca.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/c0713789f565390170e27fe8cc97970a5dee99e7c76613dc652c4433f6d73eaf.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/f65960c74de5e12fbfe53f291a0a8a3c3a18623b72faa97a7892ca062e366b3f.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/8d937a5baaa7ec2235736974881a6bc6f815cd2aea6ec287b2b3d594d68702e6.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/2b12a076d2285f9e223a8aedcab9e9e8025145e31ce96e6bbae9ae205884ecae.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/9e4ed699e799884f22b09e06eeb93dc315f1d649bdf0855fc8476c10082fe5e2.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/c769233c83e6961f4fd9b3928d895b8ef8a622163c192d60e78de6f167979822.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/48891ae04008a7bb7d751b9d1a5baef0e7276554f84a59fd4354a47be53954bb.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/699285c727905fe7ae84b48820d8c35134887c063e95e3f042f878eaa7133c1f.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/1bbdbe56315e2d12df9ee7f4e651553bb8d1d26ff70f4bb0befb91131bb09298.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/205118aa770361916bebc6a5412f87e2755200ae115e17cc3a747139f7fbfc49.jpg',
            },
          ],
          contactInfo: {
            inquiryPerson: {
              phone: '-',
            },
          },
          isExclusive: false,
          url: 'https://www.homegate.ch/buy/3001615826',
          salePrice: 2950000,
          salePricePerSqm: 14532,
          currency: 'CHF',
          address: {
            street: 'Ferdinand-Hodler-Strasse',
            houseNumber: '44',
            postCode: '8049',
            city: 'Z\u00fcrich',
          },
          coordinates: {
            latitude: 47.405131852013,
            longitude: 8.498491289242,
          },
          floorNumber: 3,
          buildingYear: 1980,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_maisonette',
          },
          livingArea: 203,
          numberOfRooms: 6.5,
          hasLift: true,
          hasParkingSpaces: true,
          isPreciselyLocated: true,
        },
        {
          offerId:
            'f3a0ed40be11503f82196dced79fc60e6b6d5e47bf0dc7a8eb471893637541f1',
          dealType: 'sale',
          startDate: '2022-01-04',
          daysOnMarket: 35,
          isActive: true,
          isPrivate: false,
          title: 'Urbane Neubau 2.5 Zimmerwohnung in Schwamendingen',
          description:
            'Sie sind auf der Suche nach einer urbanen Neubau-Wohnung in der Stadt Z\u00fcrich? Im Quartier Mitte in Schwamendingen, entsteht das Neubauprojekt Middle mit insgesamt 14 Wohnungen. Hier k\u00f6nnte auch Ihr neues Zuhause ab Sommer/Herbst 2023 entstehen. Der durchdachte Grundriss der 2.5-Zimmerwohnung l\u00e4sst Sie praktisch und komfortabel Wohnen. Geniessen Sie das einladende Wohnzimmer mit offener moderner K\u00fcche oder entspannen Sie in der eigenen Loggia und machen sich einen gem\u00fctlichen Abend. Die zentrale Lage kommt Ihnen zu gut, in kurzer Gehdistanz befindet sich die n\u00e4chste Tramhaltestelle, von dort aus gelangen Sie schnell zu Ihrem n\u00e4chsten Ziel. \n\nZ\u00f6gern Sie nicht und reservieren Sie noch heute Ihr neues Zuhause auf middle.fruehimmo.ch/. Gerne werden wir uns bei Ihnen melden. \n\nDas Wichtigste in K\u00fcrze:\n- Entscheiden Sie Ihren Innenausbau\n- Aussergew\u00f6hnliche Architektur mit urbanem Flair\n- Wohnfl\u00e4che von ca. 69 m\u00b2\n- Offenes Wohn- und Esszimmer\n- Moderne offene K\u00fcche\n- Bodenheizung\n- Nordwestlich ausgerichteter Aussenbereich\n- Kellerabteil / Waschsalon\n- Kein Tiefgaragenparkplatz verf\u00fcgbar\n- Minergie-Bauweise mit Komfort-L\u00fcftung \n- Bezugsbereit im Sommer/Herbst 2023\n\nWir freuen uns auf Sie!\n\nBaujahr: 2021',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/91fc7722407f9ce8712174da148203b835c8b73525e52a726b731bb2c05909a7.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/51e21a6381fafa41675028e2ebce5ab2e7a99ce25fb2a14ce0e6d770a8bbfb7f.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/31d0246187670b9cc0f9f5354af3712b139f6006f46fb099d28c0468dd7f79b3.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/0d1c66eee99e38d4ec35d30f650bd1dd57089e23da90f10d19737a27a38a7396.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/caf4bd05bb397b63639f9f1d99ac4f10df9bf0bde32b95f88c897c029925d4a4.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/603f402e2cb965da7921750ed799a816ce87a02113066eb527823933b6960789.jpg',
            },
          ],
          contactInfo: {
            inquiryPerson: {
              name: 'Herr Jan Sch\u00fcpfer',
              phone: '+41 44 5041806',
            },
          },
          isExclusive: false,
          url: 'https://www.homegate.ch/buy/3001489467',
          salePrice: 885000,
          salePricePerSqm: 12643,
          currency: 'CHF',
          address: {
            street: 'Rowiesenstrasse',
            houseNumber: '116/122',
            postCode: '8051',
            city: 'Z\u00fcrich',
          },
          coordinates: {
            latitude: 47.406061812159,
            longitude: 8.578363794777,
          },
          buildingYear: 2021,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_normal',
          },
          livingArea: 70,
          numberOfRooms: 2.5,
          hasLift: true,
          isPreciselyLocated: true,
        },
        {
          offerId:
            'd9a78b24abb41d67ca37c25bdc41fd7b3840cb0fe998e513cda6f98067881114',
          dealType: 'sale',
          startDate: '2021-12-29',
          daysOnMarket: 41,
          isActive: true,
          isNew: false,
          isPrivate: false,
          title:
            '2 1/2-Zimmer Wohnung mit erholsamem Garte-Sitzplatz an ruhiger, Zentraler Lage in Altstetten',
          description:
            'Diese helle, freundliche 2 1/2 - Zimmer-Wohnung liegt in Z\u00fcrich-Altstetten an ruhiger und trotzdem zentraler Lage.\r\n\r\nDie Wohnung befindet sich im EG eines Mehrfamilienhauses.\r\n\r\nDie K\u00fcche und das separate Esszimmer mit einem separaten Sitzplatz lassen auch beim Kochen und Essen einen sch\u00f6nen Blick ins Gr\u00fcne zu. \r\n\r\nDer hochwertige Parkettboden im Wohnzimmer wurde regelm\u00e4ssig gepflegt. Der Gartensitzplatz s\u00fcdwestlich liegend, verspricht viel Sonne und Erholung.\r\n\r\nVom Schlafzimmer gibt es ein direkter Ausgang zum sonnigen Sitzplatz vor dem Wohnzimmer. Direkt neben dem Schlafzimmer befindet sich ein Bad/WC. \r\n\r\nInnerhalb der Wohnung befindet sich ein praktischer Abstellraum. \r\n\r\nZur Wohnung geh\u00f6rt ein Kellerabteil. \r\n\r\nDie Wohnung ist bis 31.08.2022 vermietet. \r\n\r\nParkpl\u00e4tze k\u00f6nnen von der Stadt (Laternenpl\u00e4tze) oder allenfalls Garagenpl\u00e4tze von den \u00fcbrigen Eigent\u00fcmern zugemietet werden. \r\n\r\nin 5 Minuten Fussweg befindet sich eine grosse Sportanlage sowie ein wundersch\u00f6nes Naherholungsgebiet. \r\n\r\nSind sie interessiert? Gerne zeigen wir Ihnen diese sch\u00f6ne Wohnung.',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/60c744726a8b6acce7e640d893004ffcda3b73793a036c9018606ef0d94ac4eb.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/7ba90e7fab7b6cffa4a49c3281243bef58e4a3449f835c10a76b2775e4f2a96f.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/f1ed6eb09609fba015ab84da4bf2fa5b06ab6290281ce73e6cf5bbc1e339a63f.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/73d3a90472a2be1974f8798a18801b8c35cd3017fec084ab2581d949f89dd13d.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/45f80a7c86fe6174125a8688566d463703f828223e436bfc202922a732e15fc3.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/ca65e171ecc04c9cad7730131d075c6921ffbdb0169fbde36bda48d0f1c2539b.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/d9a25fe8e0db95d114be99e52975c05822e2cc0c16c425ebb9ea192e5352af92.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/adaedbeba793ee9303d1aad62d426f213764e946f6d3e3a4c28f66f37ee6ffcf.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/8b9883d2d2702db34bfcbab3e0f3d42f5a1559e7be2ff20315fd53f9cb6d0f99.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/766c75dc66ce5d3e1930caf7d70c7925f07b76f697c8893f6d7ef79de653dd32.jpg',
            },
          ],
          contactInfo: {
            inquiryPerson: {
              name: 'Gallmann Susanna',
              phone: '079 211 18 13',
            },
          },
          isExclusive: false,
          url: 'https://www.homegate.ch/buy/3001592108',
          salePrice: 875000,
          salePricePerSqm: 14583,
          currency: 'CHF',
          address: {
            street: 'Eugen-Huber-Strasse',
            houseNumber: '162',
            postCode: '8048',
            city: 'Z\u00fcrich',
          },
          coordinates: {
            latitude: 47.3891726,
            longitude: 8.4716488,
          },
          floorNumber: 0,
          buildingYear: 1980,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_normal',
          },
          livingArea: 60,
          numberOfRooms: 2.5,
          hasLift: true,
          isPreciselyLocated: true,
        },
        {
          offerId:
            '0aea3c112daa87e4b131f62146eb0e17ebfef3847d18061d4f0bca203ed00a38',
          dealType: 'sale',
          startDate: '2021-12-26',
          daysOnMarket: 44,
          isActive: true,
          isPrivate: false,
          title:
            'Luxuri\u00f6s, urban, zentral: einzigartiges Wohngef\u00fchl in der Stadt',
          description:
            'Wo einst Industriechemin\u00e9es rauchten, pulsiert heute das urbane Leben: Der Z\u00fcrcher Kreis 5 punktet mit einer vielschichtigen, bunten Lebenswelt. Und mit einem einzigartigen Zuhause, das Farbe ins Wohnen bringt. \n \nSchon die Lage ist einfach unverwechselbar: Sie kommen in den Genuss von viel Ruhe und Privatsph\u00e4re, und zwar obwohl sie sozusagen mitten im Geschehen sind. Das Zuhause selbst ist frisch renoviert, hat jede Menge Exklusivit\u00e4t und Komfort zu bieten und verf\u00fcgt \u00fcber einen hohen Ausbaustandard. Es ist f\u00fcr jedes Alter bestens geeignet, ist es doch barrierefrei und gut zug\u00e4nglich. \n \nDas Wohn- und Esszimmer verspr\u00fcht eine einladende Atmosph\u00e4re, dank grosser Fensterfronten ist es lichtdurchflutet. Das Raumgef\u00fchl ist hier \u00fcberhaupt luftig-leicht, denn die Raumh\u00f6he betr\u00e4gt \u00fcber 2.6 Meter. Die grosse K\u00fcche bietet alles, was es f\u00fcr das Kocherlebnis braucht. So erwarten Sie hier etwa ein Gaggenau-Induktionsherd, Steamer, zwei K\u00fchlschr\u00e4nke, viel Stauraum und ein Reduit. Zudem k\u00f6nnen Sie sowohl in der K\u00fcche und im Wohnzimmer f\u00fcr Abwechslung sorgen, und zwar mit einem Farbenspiel in den  R\u00e4umen. \n \nEs ist hier sowieso alles sehr durchdacht: Die schicke Einbaugarderobe sowie diverse Einbauschr\u00e4nke sind praktisch in den Grundriss eingef\u00fcgt und hochwertig ausgef\u00fchrt. Auch das ger\u00e4umige Schlafzimmer ist so geschnitten, dass es viel Platz bietet und dank Einbauschrank erst noch f\u00fcr eine aufger\u00e4umte Atmosph\u00e4re sorgt. Die En-suite-Nasszelle verf\u00fcgt \u00fcber eine grosse Dusche. Und auch die zweite Nasszelle beherbergt eine grosse Dusche, ausserdem ist dort der Waschturm untergebracht. \n \nDie pr\u00e4chtige, gedeckte Loggia ist bei jeder Witterung die optimale Erweiterung des Wohnraums: Hier lassen Sie die Seele baumeln und tanken Sie neue Energie. Zus\u00e4tzlich sind hier ein Keller und ein Tiefgaragenplatz mit Elektroladestation dabei. \n \nDas erwartet Sie ausserdem: \n \n- Frisch renovierte Wohnung \n- Topmoderne K\u00fcche mit Farbenspiel \n- Hochwertige K\u00fcchenausstattung mit Gaggenau-Induktionsherd, Steamer, Ofen, zwei K\u00fchlschr\u00e4nken uvm. \n- Wundersch\u00f6nes helles Wohn- und Esszimmer mit Plattenboden von Versace \n- Grossen Fensterfronten \n- Masterbedroom mit sch\u00f6nem Einbauschrank \n- En-suite-Nasszelle mit grosser begehbarer Dusche  \n- Zus\u00e4tzliche Nasszelle mit begehbarer Dusche sowie Waschmaschine und Tumbler \n- Reduit neben der K\u00fcche \n- Sch\u00f6ne, gedeckt Loggia \n- Hohe R\u00e4ume \n- Einbaugarderobe und -schr\u00e4nke \n- Verschiedene Farbenspiele in K\u00fcche und Wohnzimmer \n- Geb\u00e4udeautomation (auch \u00fcber Smartphone steuerbar) \n- Minergie-Bauweise \n- Kontrollierte Wohnungsl\u00fcftung und 3-fache Verglasung \n- Lift \n- Barrierefreiheit \n- Keller \n- \u00d6V vor dem Haus \n- Einkauf im Haus und in unmittelbarer N\u00e4he \n- Tiefgaragenplatz mit Elektrostation im Preis inbegriffen \n \nNutzen Sie die Gelegenheit und vereinbaren Sie einen Besichtigungstermin, um sich selbst davon zu \u00fcberzeugen! Gerne erwarten wir Ihren Anruf. \n \nBesuchen Sie uns auf www.nobilimmo.ch\n\n\n\n\n\n',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/708f7599117cb46cdf7ccc36685a4d8b7152f0cae38ed55cea1ef1979201012c.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/96c38740b7be488743d565f28572a8e5591b8a9a085187a2b3764b06a320ca4e.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/c55c258ee6f398d7a2c8d131e8b3bfa82df8325111de85a06308e6877e1b245e.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/acf48269bab0b9faae5a337c125dd7cd3bf47916047827e4c94236f3d279066b.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/d025ff73fef41b92b61b0637366264d60940aaad9d8e87d41fd1eaeaffe5c83a.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/c73566f254b38acf277e6cdd7e88c46299a72fc00c5d6319d5967553af8f14b5.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/6db9546ca66e479bb4a82932c244c1f1f0f75c1c6bd0e18be37f776bdb5bc233.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/3980d82534131cc867e8aec42eb7085efe6e66fa6abb7702f8ff3a91767efe13.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/597ea3d315c47347657d93023b67db6cbf5ffcc1bf43fd0665dad08d08b361d0.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/752c9ce0fdc26be131015b558b32b81dec87990de997b846158933aad751d635.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/f78a88d094644ab1aca0d39dfdd7e16065bd0533ba611e3d2f4c22b0233fc450.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/347cb768e6e0088fa7e1449cb02b4e87fea1c39095e612d3fc5b61f9e9f8092e.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/75c7d2a55c3a7375ba375941be452fe34fbc06c2c2655edbb1fe533b5aebfa25.jpg',
            },
          ],
          contactInfo: {
            inquiryPerson: {
              name: 'Roger Meier',
              phone: '+41 76 801 74 24',
            },
          },
          isExclusive: false,
          url: 'https://www.homegate.ch/buy/3001587389',
          salePrice: 2400000,
          salePricePerSqm: 28571,
          currency: 'CHF',
          address: {
            street: 'Technoparkstrasse',
            houseNumber: '10',
            postCode: '8005',
            city: 'Z\u00fcrich',
          },
          coordinates: {
            latitude: 47.3909568,
            longitude: 8.5175804,
          },
          buildingYear: 2004,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_normal',
          },
          livingArea: 84,
          numberOfRooms: 2.5,
          hasLift: true,
          isWheelchairAccessible: true,
          isPreciselyLocated: true,
        },
        {
          offerId:
            'e368f7ea594f0838b33832142ac9051e6fab72bd7a7e8a10002dd3700c942db4',
          dealType: 'sale',
          startDate: '2021-12-12',
          daysOnMarket: 58,
          isActive: true,
          isPrivate: false,
          title: 'WOHNEN IM BELIEBTEN H\u00d6NGG',
          description:
            'Ergattern Sie sich im beliebten H\u00f6ngg eine Wohnung, geeignet f\u00fcr Familien, Paare oder als Renditeobjekt.Ein Flur erschliesst die Zimmer und f\u00fchrt direkt in den offenen Wohn- und Essbereich. Die K\u00fcche punktet als genialer Raumtrenner zum Essbereich. Vom Wohnzimmer aus haben Sie direkten Zugang zum Balkon. Dank den grossz\u00fcgigen Schlafzimmern, kann sich jedes Familienmitglied frei entfalten. Kommen Sie vorbei und \u00fcberzeugen Sie sich selbst!  \r\n  \r\n**Dieses properti-Angebot zeichnet sich durch folgende Vorteile aus:**  \r\n\r\n- Zentrale Lage\r\n- Quartier H\u00f6ngg\r\n- Familienfreundlich\r\n- Bushaltestelle und Einkaufsm\u00f6glichkeiten in der N\u00e4he\r\n- Anschluss f\u00fcr Waschturm\r\n- Balkon\r\n- Garagenplatz f\u00fcr 45000.- CHF\r\n\r\n  \r\nInteressiert? Kontaktieren Sie uns f\u00fcr eine unverbindliche Besichtigung!  \r\n  \r\nSelber eine Immobilie zu vermarkten? Wir \u00fcberzeugen mit fairen und transparenten Konditionen!  \r\n  \r\n  \r\n  \r\n  \r\nF\u00fcr mehr Immobilien besuchen Sie unsere Webseite unter:  \r\nwww.properti.ch  \r\n  \r\nKostenlose Marktwertsch\u00e4tzung oder Mietzinsanalyse:  \r\nwww.properti.ch/de/anfrage-bewertung/  \r\n  \r\nKostenlose Tipps & Tricks zum Verkauf oder zur Vermietung:  \r\nwww.properti.ch/de/blog  \r\n  \r\n',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/c1492a4472457b8a589343845125e7aab1b191db41d70d5418ceb7f577ac51bc.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/53e12b093d08729daa6b5fee2e6cb8646745347c02e7bcc80f3a01cbbfc768c2.jpg',
            },
          ],
          contactInfo: {
            webUrl: 'http://www.properti.ch',
            isGuest: false,
            logoUrl:
              'https://www.immoscout24.ch/resources/memberlogos/L1837805-R.png',
            lastName: 'Jelena Radovanovic',
            userType: 'M',
            reference: 'Jelena Radovanovic',
            companyZip: '8048',
            companyCity: 'Z\u00fcrich',
            companyName1: 'Properti AG',
            companyStreet: 'Flurstrasse 62',
            showLogoOnSerp: true,
            isAccountMigrated: true,
            logoUrlDetailPage:
              'https://www.immoscout24.ch/resources/memberlogos/L1837805-R.png',
            companyPhoneBusiness: '044 244 32 00',
          },
          url: 'https://www.immoscout24.ch/en/d/flat-buy-zuerich/6821791',
          salePrice: 1650000,
          salePricePerSqm: 11870,
          currency: 'CHF',
          address: {
            street: 'Tobeleggweg',
            postCode: '8049',
            city: 'Z\u00fcrich, Kreis 10 (Zurich)',
          },
          coordinates: {
            latitude: 47.3983334,
            longitude: 8.5030094,
          },
          floorNumber: 1,
          buildingYear: 1982,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_normal',
          },
          livingArea: 139,
          numberOfRooms: 5.5,
          hasParkingSpaces: true,
          isPreciselyLocated: false,
        },
        {
          offerId:
            'dc38fd9360a78a9e55a3ca7a0625635fa78d6933da133c369aa664fc9705f3b6',
          dealType: 'sale',
          startDate: '2021-12-12',
          daysOnMarket: 58,
          isActive: true,
          isPrivate: false,
          title: 'WOHNEN IM BELIEBTEN H\u00d6NGG',
          description:
            'Ergattern Sie sich im beliebten H\u00f6ngg eine Wohnung, geeignet als Renditeobjekt oder auch f\u00fcr Singles. Die M\u00f6glichkeit besteht, einen Balkon anzubauen und die K\u00fcche von einer Wohnk\u00fcche in eine offene um zu gestallten, damit sie auch in einem modernen Still erstrahlt. Das Objekt ist vermietet und damit auch ein guter Start f\u00fcr Ihr neues Projekt. Kommen Sie vorbei und \u00fcberzeugen Sie sich selbst!  \r\n  \r\n**Dieses properti-Angebot zeichnet sich durch folgende Vorteile aus:**  \r\n\r\n- Zentrale Lage\r\n- Quartier H\u00f6ngg\r\n- Bushaltestelle und Einkaufsm\u00f6glichkeiten in der N\u00e4he\r\n- M\u00f6glichkeit, Balkon anzubauen\r\n- Garagenplatz f\u00fcr CHF45000.-\r\n\r\n  \r\nInteressiert? Kontaktieren Sie uns f\u00fcr eine unverbindliche Besichtigung!  \r\n  \r\nSelber eine Immobilie zu vermarkten? Wir \u00fcberzeugen mit fairen und transparenten Konditionen!  \r\n  \r\n  \r\n  \r\n  \r\nF\u00fcr mehr Immobilien besuchen Sie unsere Webseite unter:  \r\nwww.properti.ch  \r\n  \r\nKostenlose Marktwertsch\u00e4tzung oder Mietzinsanalyse:  \r\nwww.properti.ch/de/anfrage-bewertung/  \r\n  \r\nKostenlose Tipps & Tricks zum Verkauf oder zur Vermietung:  \r\nwww.properti.ch/de/blog  \r\n  \r\n',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/9b47e72594e00d6d61fc43540751fe6ba6747b89fea43ac66f2c7a5e1cfbf082.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/95022777a578e86e07078d97e524d7954ae54cab703a0952b16b75aeec24cd5f.jpg',
            },
          ],
          contactInfo: {
            webUrl: 'http://www.properti.ch',
            isGuest: false,
            logoUrl:
              'https://www.immoscout24.ch/resources/memberlogos/L1837805-R.png',
            lastName: 'Jelena Radovanovic',
            userType: 'M',
            reference: 'Jelena Radovanovic',
            companyZip: '8048',
            companyCity: 'Z\u00fcrich',
            companyName1: 'Properti AG',
            companyStreet: 'Flurstrasse 62',
            showLogoOnSerp: true,
            isAccountMigrated: true,
            logoUrlDetailPage:
              'https://www.immoscout24.ch/resources/memberlogos/L1837805-R.png',
            companyPhoneBusiness: '044 244 32 00',
          },
          url: 'https://www.immoscout24.ch/en/d/flat-buy-zuerich/6821779',
          salePrice: 705000,
          salePricePerSqm: 15326,
          currency: 'CHF',
          address: {
            street: 'Tobeleggweg',
            postCode: '8049',
            city: 'Z\u00fcrich, Kreis 10 (Zurich)',
          },
          coordinates: {
            latitude: 47.3983334,
            longitude: 8.5030094,
          },
          floorNumber: 1,
          buildingYear: 1982,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_normal',
          },
          livingArea: 46,
          numberOfRooms: 2.5,
          hasParkingSpaces: true,
          isPreciselyLocated: false,
        },
        {
          offerId:
            '9eee073e2fd7926967d152cb9345aeacfa97a4a162123aac1613b54e36d29c9d',
          dealType: 'sale',
          startDate: '2021-12-08',
          daysOnMarket: 62,
          isActive: true,
          isPrivate: false,
          title:
            'Ruhige und zentral gelegene 3.5 Zimmer Wohnung mit sonnigem S\u00fcdbalkon',
          description:
            'Ruhige und zentral gelegene 3.5 Zimmer Wohnung mit sonnigem S\u00fcdbalkon  \r\n  \r\nDiese lichtdurchflutete 3.5-Zimmer Wohnung mit sonnigem S\u00fcdbalkon an sehr ruhiger und doch zentraler Lage in Leimbach bietet einmaligen Wohnkomfort und ein moderner Innenausbau. Mit dem praktischen Grundriss und den hellen Wohnr\u00e4umen ist diese Wohnung ideal geeignet f\u00fcr Singles, Paare und kleine Familien. \u00d6V und Einkaufen sind in wenigen Gehminuten erreichbar. Die Gemeinde bietet zudem eine Vielzahl von Sport- und Freizeitm\u00f6glichkeiten und ein gutes Bildungsangebot.  \r\n  \r\n**Genaue Adresse verf\u00fcgbar nach Registrierung auf neho.ch**.  \r\n**AN EINER BESICHTIGUNG INTERESSIERT? BITTE ANMELDEN: https://neho.ch/p/8041-21-3**  \r\n  \r\n',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/42fdb68c7c1d341dda95f9af90c9cf20e731db24e8ee37a87e3a22a1ce578eb6.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/346ccab20bde74d48d06b0b01fdf95470aae76ca294247b429b63664c0a0a4dd.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/857d43345400ca8f07bbe9290b23b25b2fb2fde83400f13e2abe4e5a312f6900.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/e2178b583662d03350b00d90ef57d5eaff80885117cae629bf12727613654e38.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/4cb43a9b471297e47029645da1079bcf59790b2042fa3d1524609ba502c82853.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/95b075f59691951093700d429d9ef94f29ca6aff37057af716b9622ab1a6d488.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/6b2945ee3ec994a00c1e34258537fc30ae2d045d1ae6b283ae6a63b08b6e483f.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/bccf5c79ab9900ea28064c9105848f92f11d56d4dc9883c28ef5ac3685c9c49d.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/5e7c0e1d7f38aeff5be30383ea2354bd914c23cd4dbcf5b8f4eac8bc0f6afd22.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/6f0fe42748685698b95ce4082b8ccc9ff1590a75c3ea21e39e583d3a80b66684.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/235078f213db68dc77e95924ca954ed1bd0ff4deef788955ba9de174e6f05562.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/c3e8458423b8c2a3b05635ccb0ac83ebf6b5b2b4d1b21a9d71511d1458f02c05.jpg',
            },
          ],
          contactInfo: {
            webUrl: 'http://www.neho.ch',
            isGuest: false,
            logoUrl:
              'https://www.immoscout24.ch/resources/memberlogos/L924306-R.png',
            lastName: 'Naina Salanitri',
            userType: 'M',
            reference: 'Naina Salanitri',
            companyName1: 'Neho',
            showLogoOnSerp: true,
            isAccountMigrated: true,
            logoUrlDetailPage:
              'https://www.immoscout24.ch/resources/memberlogos/L924306-R.png',
          },
          url: 'https://www.immoscout24.ch/en/d/flat-buy-zuerich/6815522',
          salePrice: 1100000,
          salePricePerSqm: 12791,
          currency: 'CHF',
          address: {
            street: 'Z\u00fcrich',
            postCode: '8041',
            city: 'Z\u00fcrich, Kreis 2 (Zurich)',
          },
          coordinates: {
            latitude: 47.3342961,
            longitude: 8.5124458,
          },
          floorNumber: 0,
          buildingYear: 1984,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_normal',
          },
          livingArea: 86,
          numberOfRooms: 3.5,
          isPreciselyLocated: false,
        },
        {
          offerId:
            'c7bc53931bb9d7543a9e4bf3a4bdc4ff0fba3ec59788c5aebf18924ce16ab1c6',
          dealType: 'sale',
          startDate: '2021-12-07',
          daysOnMarket: 63,
          isActive: true,
          isNew: false,
          isPrivate: false,
          title: 'Herzige 2.5 Zimmer-Wohnung mit Terrasse am Z\u00fcrichberg',
          description:
            'Z\u00fcrich\r\nDie Stadt am Z\u00fcrichsee, umgeben von zahlreichen Naherholungsgebieten, weist die weltweit h\u00f6chste Lebensqualit\u00e4t auf: Einkaufs-, Sport- und Freizeitaktivit\u00e4ten sowie ein einzigartiges kulturelles Angebot. Die Infrastruktur ist \u2013 vom Entsorgungsmanagement bis zum \u00f6ffentlichen Verkehr \u2013 hervorragend. Das stolze Z\u00fcrich, die gr\u00f6sste Stadt der Schweiz, ist eine lebendige und dynamische Metropole mit \u00fcber 400\u2018000 Z\u00fcrcherinnen und Z\u00fcrcher. Ein Drittel der Bev\u00f6lkerung stammt aus anderen Kulturen und macht die Stadt weltoffen, vielf\u00e4ltig und kunterbunt.\r\n\r\nLage\r\nDas kleine Mehrfamilienhaus liegt an einer ruhigen Sackgasse am sonnigen Z\u00fcrichberg. Der Toblerplatz, die Anbindung an das \u00f6ffentliche Verkehrsnetz, liegt nur ein paar Gehminuten entfernt.\r\n\r\nShopping\r\nAm Toblerplatz befinden sich Migros, SPAR und Denner. Der n\u00e4chste COOP-Supermarkt liegt bei der Tramhaltestelle Fluntern, ein paar Minuten vom Toblerplatz entfernt.\r\n\r\nSport und Freizeit\r\nDie Fluntern \u2013 drei Tramhaltestellen ab Toblerplatz \u2013 bieten ein riesiges Angebot an Indoor- und Outdooraktivit\u00e4ten oder ein Besuch im Zoo.\r\n\r\nVerkehr\r\nTram Nr. 5 + 6 und Bus Nr. 33 ab Toblerplatz in die City.\r\n\r\nDas Objekt\r\nEs handelt sich hier um eine grossz\u00fcgige 2.5 Zimmer-Wohnung, welche 2006 komplett renoviert wurde. Eingangsbereich mit Badezimmer und sep. K\u00fcche, sch\u00f6nes Wohnzimmer mit Ausgang zur grossen Terrasse und grossz\u00fcgiges Schlafzimmer, getrennt mit einer Schiebet\u00fcre zum Wohnen.',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/76c10422e7098c33c675089c76dc3bfc110892308737098f43815b9894332f5e.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/a26c8fe770b97eca2f739ed0873ed157c3f4a3b6ebfea8be99eca29ce4cd24d0.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/2e1297af705bdbc020da97b1edd4c7aaf5b418338c6fbf903f5d6b9288150856.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/2ede814fbc327c79542f85fd9fba12984b1aeaf746a0235b914b654318a6f576.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/a78c33e53185fe56304efb44e15f6407fd4b9048f7f9f3251009895a1ef28c76.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/4eb7469499be5482a2c9dc4c27a1ba8662d15d10fee714f13a6c37204110a8fa.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/3da8c643dd0198d8349ff4b730f712edbf58e2f752ef95f3a8ea0c542963fae5.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/15238128bb1e1ae699e05e8e827c48a30a663a5eec689ebab5ebbce86cf2f1a5.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/129fcbe5676e741b64bd25ddd0a7d0188fad674c9e12cf6be853bca6f2db1e1f.jpg',
            },
          ],
          contactInfo: {
            inquiryPerson: {
              name: 'Markus Arnold',
              phone: '078 411 39 89',
            },
          },
          isExclusive: false,
          url: 'https://www.homegate.ch/buy/3001534131',
          salePrice: 1220000,
          salePricePerSqm: 19677,
          currency: 'CHF',
          address: {
            street: 'Fritz-Fleiner-Weg',
            houseNumber: '3',
            postCode: '8044',
            city: 'Z\u00fcrich',
          },
          coordinates: {
            latitude: 47.381911852013,
            longitude: 8.561041291755,
          },
          floorNumber: 0,
          buildingYear: 1952,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_normal',
          },
          livingArea: 62,
          numberOfRooms: 2.5,
          isPreciselyLocated: true,
        },
        {
          offerId:
            '76d5382565305095f90cd5e81f2953e6cd5f7c94a619feeede56c8513eeaa4d9',
          dealType: 'sale',
          startDate: '2021-12-06',
          daysOnMarket: 64,
          isActive: true,
          isPrivate: false,
          title: 'Moderne helle Erdgeschoss Wohnung',
          description:
            "In Z\u00fcrich Manegg / Wollishofen, entlang der Sihl, befindet sich das begehrte und energieeffiziente Quartier ''Greencity''. Hier steht diese attraktive 5.5 Zimmer Erdgeschosswohnung, mit einer Wohnfl\u00e4che von 134 m2, zum Verkauf.   \r\n  \r\nIm Erdgeschoss gelegen, profitiert die Wohnung von einem modernen Ausbaustandard und einem durchdachten Grundriss. Insgesamt erstreckt sich die Wohnung \u00fcber 134 m2, verf\u00fcgt \u00fcber einen offenen Wohn- und Esszimmerbereich, vier Schlafzimmer, zwei Badezimmer, ein Reduit und zwei grossz\u00fcgige Terrassen, welche eine Gesamtfl\u00e4che von 77 m2 aufweisen. Die zwei Nasszellen wurden im industriellen Stil saniert und \u00fcberzeugen durch ihren modernen Touch. Sie sind aufgeteilt in ein Badezimmer mit Badewanne und WC sowie in ein Badezimmer mit Dusche und WC, welches bequem als G\u00e4ste-WC benutzt werden kann. Die offene und moderne K\u00fcche, welche mit allen notwendigen E-Ger\u00e4ten ausgestattet ist, ist mit dem Wohnbereich verbunden und bietet eine Fl\u00e4che von ca. 57,60 m2. Im Wohn- und Schlafbereich ist ein hochwertiger Parkettboden verlegt.   \r\nDurch die moderne Technik, die hier vorhanden ist, k\u00f6nnen Sie diverse Steuerungen mithilfe des vorhandenen Steuerungsprogramms bedienen. Das Baujahr der Wohnung ist 2018 und die komplette Inneneinrichtung ist auf dem besten Stand.  \r\n  \r\n**Das Areal**  \r\nEine Wohnung im bekannten Quartier ''Greencity'' ist immer eine sinnvolle Investition. Entlang der Sihl und in unmittelbarer N\u00e4he zu den Naherholungsgebieten sowie ideal an die \u00f6ffentlichen Verkehrsmittel angebunden. Als erstes Areal der Schweiz, welches sich konsequent nach den Zielen der 2000-Watt-Gesellschaft richtet, setzt das \u00e4usserst moderne Quartier die Richtlinie in Bezug auf hohe Energieeffizienz und Umweltbewusstsein. ''Greencity'' bildet eine Kombination aus Wohngeb\u00e4uden und B\u00fcros sowie ausreichend Einkaufsm\u00f6glichkeiten und Restaurants - praktisch eine kleine eigene Stadt am Rande der Stadt Z\u00fcrich.  \r\n  \r\nBei weiteren Fragen oder wenn Sie eine Besichtigung w\u00fcnschen, stehen wir Ihnen jederzeit gerne zur Verf\u00fcgung.  \r\n  \r\n  \r\nIn Zurich Manegg /Wollishofen, along the Sihl, is the sought-after and energy-efficient quarter ''Greencity''. Here is this attractive 5.5 room first floor apartment, with a living area of 134 m2, for sale.   \r\n  \r\nLocated on the first floor, the apartment benefits from a modern finishing standard and a well thought-out floor plan. In total, the apartment extends over 134 m2, has an open living and dining room area, four bedrooms, two bathrooms, a reduit and two spacious terraces, which have a total area of 77 m2. The two wet rooms were renovated in industrial style and convince with their modern touch. They are divided into a bathroom with bathtub and toilet and a bathroom with shower and toilet, which can be conveniently used as a guest toilet. The open and modern kitchen, which is equipped with all necessary electrical appliances, is connected with the living area and offers an area of about 57.60 m2. In the living and sleeping area, a high-quality parquet floor is laid.  \r\nDue to the modern technology available here, you can operate various controls with the help of the existing control program. The year of construction of the apartment is 2018 and the complete interior is in the best condition.  \r\n  \r\nThe area  \r\n  \r\nAn apartment in the well-known quarter ''Greencity'' is always a sensible investment. Along the Sihl and in close proximity to the local recreation areas as well as ideally connected to public transport. As the first area in Switzerland to be consistently oriented towards the goals of the 2000-watt society, the extremely modern quarter sets the guideline in terms of high energy efficiency and environmental awareness. ''Greencity'' forms a combination of residential buildings and offices as well as sufficient shopping facilities and restaurants - practically a small city of its own on the outskirts...",
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/df3f47f3398af0281b5aa38da8b471a6168555d2c4d3ace6c5f4c72b0e10e832.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/43c746320ff68a3dc8299c00db782bd4e9a2df0aed4a68583daf29ec8f6bac79.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/51f9e9f901b1d76f10755c2749dc12fabf18506a759fb0b22cc4514c8c5f5a4a.jpg',
            },
          ],
          contactInfo: {
            webUrl: 'http://www.zurichsothebysrealty.com',
            isGuest: false,
            logoUrl:
              'https://www.immoscout24.ch/resources/memberlogos/L1453844-R.jpg',
            userType: 'M',
            companyZip: '8001',
            companyCity: 'Z\u00fcrich',
            companyName1: "Zurich | Sotheby's International Realty",
            companyStreet: 'Rennweg 35',
            showLogoOnSerp: true,
            isAccountMigrated: true,
            logoUrlDetailPage:
              'https://www.immoscout24.ch/resources/memberlogos/L1453844-R.jpg',
            companyPhoneBusiness: '044 512 61 51',
          },
          url: 'https://www.immoscout24.ch/en/d/flat-buy-zuerich/6811315',
          salePrice: 2520000,
          salePricePerSqm: 18806,
          currency: 'CHF',
          address: {
            street: 'Manegg / Wollishofen',
            postCode: '8041',
            city: 'Z\u00fcrich, Kreis 2 (Zurich)',
          },
          coordinates: {
            latitude: 47.3342961,
            longitude: 8.5124458,
          },
          buildingYear: 2018,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_normal',
          },
          livingArea: 134,
          numberOfRooms: 5.5,
          hasLift: true,
          isWheelchairAccessible: true,
          isPreciselyLocated: false,
        },
        {
          offerId:
            'f308863b206d5af8889491a87856e85b041fb659422a0824c4a308cd9d668803',
          dealType: 'sale',
          startDate: '2021-12-02',
          daysOnMarket: 68,
          isActive: true,
          isPrivate: false,
          title: 'Moderne Eigentumswohnung an urbaner Lage mit Abendsonne',
          description:
            'Moderne Eigentumswohnung an urbaner Lage mit Abendsonne  \r\n  \r\nAn zentraler und urbaner Lage im Z\u00fcrcher Kreis 5 begeistert dieses gehobene City-Apartment im 14. OG mit beeindruckender Sicht \u00fcber Z\u00fcrich West bis zum H\u00f6nggerberg mit einer fantastischen bewohnbaren Loggia. Geniessen Sie eine Wohnambiance der Extraklasse mit fantastischen Sonnenunterg\u00e4ngen und Residieren Sie in einem modernen und urbanen Wohngebiet mit den Besten Anbindungen nach Z\u00fcrich.  \r\n  \r\n**Genaue Adresse verf\u00fcgbar nach Registrierung auf neho.ch**.  \r\n**AN EINER BESICHTIGUNG INTERESSIERT? BITTE ANMELDEN: https://neho.ch/p/8005-21-2**  \r\n  \r\n',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/6307b575e295c71fd6f9863d0453640a8654ee0a76dec8daedcb11d1f0e1087e.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/ef5a4780c4f41988fe3be97acdf638a213bca5d0a2508a3f74328fcd36bb0caf.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/7878c9a4aca21a85e3bdd016440186625ae830e74ab597b2137a14ae52f70a7f.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/39199ffdac8471e9c933a19c48c179e8f0ace4082306341bd215f9a1c52e14af.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/cdb11cf9c7d1ed3689295a6b30c044ad0681693385f2d667db75a12c38046c23.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/f231caeb66e2b4707ceb5e6d95bec1da21129789fa2da5cca27c2a952258182f.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/24873c7622f9bef6c25841b2fb8732e61e9bf415d7940d93708be1f7e1c7d8b5.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/f010b57956bad61985b5d1bc745dfddec17e60b1fa2b0d09d074cbaa496b954c.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/aec50fee31ee79ee0400ba3ea70028efa02d4d4699c24cf3bc86cbb28cba8e91.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/49e5c9aa39da5bb311017817af141c968f9142788e9bcb39a4e49cb075c84079.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/ea718dd14f1476cd1a841bf637120087cc60c90165dd53cb69abd6b822645fda.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/ea0e58eca09521895f7d49c59d9e7ba6e9182b839d8d564d2606c5400a546a52.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/47f6e8d96c774e743530567df4526c3d5f0653ff87568677d50592d7dc31b843.jpg',
            },
          ],
          contactInfo: {
            webUrl: 'http://www.neho.ch',
            isGuest: false,
            logoUrl:
              'https://www.immoscout24.ch/resources/memberlogos/L924306-R.png',
            lastName: 'Robert Mayr',
            userType: 'M',
            reference: 'Robert Mayr',
            companyName1: 'Neho',
            showLogoOnSerp: true,
            isAccountMigrated: true,
            logoUrlDetailPage:
              'https://www.immoscout24.ch/resources/memberlogos/L924306-R.png',
          },
          url: 'https://www.immoscout24.ch/en/d/flat-buy-zuerich/6806185',
          salePrice: 2290000,
          salePricePerSqm: 19407,
          currency: 'CHF',
          address: {
            street: 'Z\u00fcrich',
            postCode: '8005',
            city: 'Z\u00fcrich, Kreis 5 (Zurich)',
          },
          coordinates: {
            latitude: 47.3912899,
            longitude: 8.5082891,
          },
          floorNumber: 14,
          buildingYear: 2013,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_normal',
          },
          livingArea: 118,
          numberOfRooms: 3.5,
          hasLift: true,
          hasParkingSpaces: true,
          isPreciselyLocated: false,
        },
        {
          offerId:
            'e80b58e8ab6eac60546483ffc64295c590cff594e1db26aed80867be22f5fa7e',
          dealType: 'sale',
          startDate: '2021-12-01',
          daysOnMarket: 69,
          isActive: true,
          isPrivate: false,
          title: 'Gartenwohnung 1.5 Zimmer',
          description:
            '  \r\n**Smarte, stilvolle Stadtwohnung (Kreis 7) mit sch\u00f6nem und sichtgesch\u00fctztem Garten.**   \r\n  \r\n  \r\n**Highlights**  \r\n  \r\nImmobilie  \r\n\r\n- Gartenwohnung mit viel Privatsph\u00e4re und smartem Innenausbau\r\n- Durchdachtes Raumkonzept mit viel Liebe zum Detail und vielen Extras\r\n- Zahlreiche Einbauschr\u00e4nke bieten ausgezeichnete Staur\u00e4ume\r\n- 2019/2020 im Stil von \u00abFunctional Living\u00bb komplett renoviert\r\n- Hochwertige Materialisierung im Innen- und Aussenbereich\r\n\r\nUmgebung  \r\n\r\n- Attraktive Lage im begehrtem Z\u00fcrcher Quartier Witikon (Kreis 7)\r\n- Sehr zentral gelegen und in Tempo-30-Zone\r\n- Ideale Einkaufsm\u00f6glichkeiten gleich vis-\u00e0-vis im Zentrum Witikon (Migros, Denner, Aldi, Post, Apotheke etc.)\r\n- Optimale Verkehrsanbindung an die \u00d6V und nur 20 Min. vom Z\u00fcrich HB\r\n- Urban und doch naturnah ? einfach sch\u00f6n, hier zu leben!\r\n\r\n  \r\n**1.5 Zimmer-Gartenwohnung**  \r\n  \r\n  \r\nAllgemein  \r\n\r\n- Eichenparkettboden\r\n- Sichtgesch\u00fctzer Garten\r\n- Smarter Innausbau\r\n- 2019/2020 Komplettrenovation\r\n- Zentrum Witikon (Kreis 7)\r\n\r\n  \r\n  \r\n**Erdgeschoss**  \r\n  \r\n  \r\nEingangsbereich  \r\n\r\n- Entr\u00e9e\r\n- Waschtrockner\r\n- Garderobe\r\n- Korridor mit vielen\r\n- Einbauschr\u00e4nken\r\n\r\nEssbereich  \r\n\r\n- Einbau-Sitzbank, inkl. Stauraum\r\n- Lichtdurchflutet\r\n- Ampelbildschirm, ideal f\u00fcr Homeoffice\r\n\r\nK\u00fcche  \r\n\r\n- EInduktions-Kochfeld\r\n- Einbau-Steamer mit Backofen\r\n- K\u00fchl-/Gefrierkombination\r\n- Geschirrsp\u00fcler\r\n- Garantie bis Nov. 2024\r\n\r\nWohnbereich  \r\n\r\n- TV Samsung Frame 55\r\n- Eingebautes Sideboard\r\n- App-gesteuertes Lichtsystem\r\n- Grosse Fensterfront\r\n- Gartenzugang\r\n\r\nSchlafbereich  \r\n\r\n- Eingebaute Bett-Nische (mit Faltt\u00fcren)\r\n- Gr\u00f6sse 180 cm x 200 cm\r\n- Stauraum unter dem Bett\r\n\r\nGarten  \r\n\r\n- 34 m\u00b2 und sichtgesch\u00fctzt\r\n- Beleuchtungs- und Bew\u00e4sserungs-System\r\n- Hinterausgang\r\n- Inkl.: Gartenlounge, Ampelschirm, Gasgrill\r\n\r\nNasszelle/BAD  \r\n\r\n- Dusche\r\n- Lavabo\r\n- WC\r\n- Spiegelschrank\r\n\r\n  \r\n  \r\n**Untergeschoss**  \r\n  \r\n  \r\n\r\n- Kellerabteil 7 m\u00b2\r\n- 1 Tiefgaragenparkplatz\r\n- Velo-, Wasch- und Trockenraum zur Mitben\u00fctzung\r\n\r\n',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/73bba36e26707566b502f6cf95cb2c29f73080a04f4de876a1d9618e18321799.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/c9d5bbe74c5500d989623bc8b6dd6d0efec87009ea51f9911f88388d033a2089.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/92bb90207898d2ec6bb472f81bca9cb935d54039d980825c44ec856b57e723c2.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/8dcc999e2127e86007aced62479fa91a35b4e9e8ac0d26b9e3f77c5095bc1ddb.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/c835ba4c322a5b17938413083f8411e84ffaf5b04e81a06b91b493af2b46f4d8.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/ca40ab22c9c7c4bb6b0fb5d6d3c2486bbab10171da5f0dcffcde01075a0ad728.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/a5de39645877c0d221783156c1b1560c27fcbcc0883bf83e002d4f484a30f1e2.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/6969e0c897b34fee4781e2c0dc118b076cfbdbda3218f04d97c3234500ba822a.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/2f5f96d5b4b21f0debc9aeb206a299a6689e0110c13f63b3947e5539b32ce924.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/e220ab675801e8af55838a37439aa8019203e6201c0ef5b3e1cffd17465f95fd.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/99689b29ee30b4698ba04d5aaa4f26bbe033a49832a0b1fb4f0c40f4dad8cba9.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/f92b7bbf3581edf78de1b28c4c0ec808a83fe5d75c48df761e062753e5ca51f1.jpg',
            },
          ],
          contactInfo: {
            webUrl: 'http://www.residence-immobilien.ch',
            isGuest: false,
            logoUrl:
              'https://www.immoscout24.ch/resources/memberlogos/L152261-R.png',
            userType: 'M',
            companyZip: '6300',
            companyCity: 'Zug',
            companyName1: 'Residence Immobilien AG',
            companyStreet: 'Baarerstrasse 23',
            showLogoOnSerp: true,
            isAccountMigrated: true,
            logoUrlDetailPage:
              'https://www.immoscout24.ch/resources/memberlogos/L152261-R.png',
            companyPhoneBusiness: '041 711 67 67',
          },
          url: 'https://www.immoscout24.ch/en/d/flat-buy-zuerich/6804563',
          salePrice: 860000,
          salePricePerSqm: 19111,
          currency: 'CHF',
          address: {
            street: 'Buchzelgstrasse',
            postCode: '8053',
            city: 'Z\u00fcrich, Kreis 7 (Zurich)',
          },
          coordinates: {
            latitude: 47.3598009,
            longitude: 8.5885901,
          },
          buildingYear: 1977,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_normal',
          },
          livingArea: 45,
          numberOfRooms: 1.5,
          hasLift: true,
          hasParkingSpaces: true,
          isPreciselyLocated: false,
        },
        {
          offerId:
            'be57caf896b08de44cbea63133f4fbb4677fe9f6b0703d08cc7c8b07c05426ef',
          dealType: 'sale',
          startDate: '2021-11-29',
          daysOnMarket: 71,
          isActive: true,
          isPrivate: false,
          title:
            'Neubauprojekt Grace: elegante Stadtwohnungen mit Einfamilienhausfeeling in Z\u00fcrich-Wipkingen',
          description:
            'Die neun Townhouses im beliebten Z\u00fcrich-Wipkingen sind einerseits Einfamilienh\u00e4user im Gr\u00fcnen und gleichzeitig zentrale Stadtwohnungen mit viel Raum, Freiheit und Privatsph\u00e4re. Perfekt gelegen am Sonnenhang von Z\u00fcrich bieten Sie ein urbanes Zuhause in naturnaher Umgebung.  \n\nDas Materialkonzept erf\u00fcllt einen hohen \u00e4sthetischen Anspruch mit zeitlosem Design. Gestalten Sie Ihr neues Zuhause mit und machen Sie es zu Ihrem individuellen Lieblingsort. \n\nWir freuen uns auf Ihre Kontaktaufnahme.',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/36a550260b3284db4189ca060b1e04e569965bf5a38c813b9e1e8455f692f0f9.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/debd2c24459dc850c11f47a85e9ed9e89f5a7e574b621b856492af28945574eb.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/b772b66ff7074fd1fe0d03bbc0431677678b8f446aef2f9fedf4ad9bab031a74.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/405ea4b0bb512108b1ef012283e30928ee0ac6aaef3dd202886898fe2b71f21e.jpg',
            },
          ],
          contactInfo: {
            inquiryPerson: {
              phone: '044 910 77 33',
            },
          },
          isExclusive: false,
          url: 'https://www.homegate.ch/buy/3001514423',
          salePrice: 1880000,
          salePricePerSqm: 19583,
          currency: 'CHF',
          address: {
            postCode: '8037',
            city: 'Z\u00fcrich',
          },
          coordinates: {
            latitude: 47.395221858736,
            longitude: 8.521631832513,
          },
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_maisonette',
          },
          livingArea: 96,
          numberOfRooms: 3.5,
          isPreciselyLocated: false,
        },
        {
          offerId:
            'eb66062d0380364736395babddfaa4b2a570aea5e45410461740b3e92b87f971',
          dealType: 'sale',
          startDate: '2021-11-24',
          daysOnMarket: 76,
          isActive: true,
          isPrivate: false,
          title: 'Einfamilienhaus mit baulichem Ausn\u00fctzungspotenzial',
          description:
            'In einem sehr beliebten Wohnquartier in Z\u00fcrich Affoltern wartet dieses 7.5-Zimmer-Einfamilienhaus auf eine neue Eigent\u00fcmerin oder einen neuen Eigent\u00fcmer.  \r\n  \r\nDas Haus wurde 1931 in Massivbauweise erstellt und ist auf vier Stockwerke verteilt. Im Aussenbereich befindet sich ein gem\u00fctlicher Gartensitzplatz mit Chemin\u00e9e und eine idyllische Gartenlandschaft. Zudem geh\u00f6ren zur Liegenschaft drei Aussenabstellpl\u00e4tze und zwei Einstellpl\u00e4tze in der Nachbarsliegenschaft mit unterirdischem Direktzugang.  \r\n  \r\nBauliches Ausn\u00fctzungspotenzial:  \r\n  \r\nAufgrund der Unternutzung der bestehenden Reserven gem\u00e4ss Zonenordnung stehen Eigennutzern, Anlegern und Entwicklern mehrere attraktive M\u00f6glichkeiten offen: Eine Kernsanierung ist ebenso \u00fcberlegenswert wie ein Neubau. Sei es f\u00fcr einen Eigennutzer, oder f\u00fcr einen Immobilienentwickler, welcher sich mehrere Mietwohnungen oder Stockwerkeigentumswohnungen in einem Trendquartier in Z\u00fcrich w\u00fcnscht.  \r\n  \r\nKaufinteressenten sind gebeten bis Dienstag, 1. M\u00e4rz 2022 ein Kaufangebot inkl. Finanzierungsnachweis einzureichen.  \r\n  \r\nWeitere Informationen sowie eine ausf\u00fchrliche Verkaufsdokumentation erhalten Sie gerne auf Anfrage.  \r\n  \r\nwww.forster-taddei.ch  \r\n  \r\n',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/5d9b210381b4dd5881e7b2a97057800feb7d7a369327e94cd7e2c126543d80a3.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/d79c83a5cc054354bda49225492a71828b01651b4bd867faeb807466562e42ea.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/268b89cb57f0152f1dd837c61cd87a02b3b244f871d75c21f29a6830479042ad.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/79e0b0aa213b8c36ffce180042f3a73f2041181e75cde009ec07b1ae0ffc20b7.jpg',
            },
          ],
          contactInfo: {
            webUrl: 'http://www.forster-taddei.ch',
            isGuest: false,
            logoUrl:
              'https://www.immoscout24.ch/resources/memberlogos/L1817195-R.png',
            lastName: 'Simon Forster',
            userType: 'M',
            reference: 'Simon Forster',
            companyZip: '8032',
            companyCity: 'Z\u00fcrich',
            companyName1: 'Forster & Taddei Immobilien AG',
            companyStreet: 'Hedwigstrasse 3',
            showLogoOnSerp: true,
            isAccountMigrated: true,
            logoUrlDetailPage:
              'https://www.immoscout24.ch/resources/memberlogos/L1817195-R.png',
            companyPhoneBusiness: '044 388 20 13',
          },
          url: 'https://www.immoscout24.ch/en/d/detached-house-buy-zuerich/6791469',
          salePrice: 2200000,
          salePricePerSqm: 13253,
          currency: 'CHF',
          address: {
            postCode: '8046',
            city: 'Z\u00fcrich, Kreis 6 (Zurich)',
          },
          coordinates: {
            latitude: 47.41709,
            longitude: 8.51376,
          },
          buildingYear: 1931,
          propertyType: {
            code: 'house',
            subcode: 'house_detached',
          },
          livingArea: 166,
          landArea: 408,
          volume: 704,
          numberOfRooms: 7.5,
          isPreciselyLocated: false,
        },
        {
          offerId:
            '76cdf22d46175bb7d67d5a968eef5ada65a7f61d477b77e1783d432b7cc270aa',
          dealType: 'sale',
          startDate: '2021-11-24',
          daysOnMarket: 76,
          isActive: true,
          isNew: true,
          isPrivate: true,
          title: 'WolkenWerk - Wohnen im Penthouse',
          description:
            '<p>In der exklusiven Penthouse-Wohnung auf 2 Etagen f\u00fchlt man sich dem Himmel nahe. Aus 60 m H\u00f6he den Blick von der doppelgeschossigen Loggia oder durch die beinahe raumhohen Fenster bis zu den Alpen schweifen zu lassen, vermittelt ein einzigartiges Gef\u00fchl von Freiheit und Ruhe \u2013 weit ab von der Hektik der Stadt. Dennoch ist die Lage der Liegenschaft verkehrstechnisch \u00e4usserst gut gelegen. Tramhaltestellen und der Bahnhof Oerlikon befinden sich in unmittelbarer N\u00e4he. Bequem per Tram oder Bahn ist der Flughafen Z\u00fcrich innerhalb von nur 10 Minuten Fahrt erreichbar.\u00a0 Das aufstrebende Quartier Kreis 11, in dem sich die Liegenschaft befindet, wird je l\u00e4nger je mehr zum angesagten Quartier und bietet bereits jetzt schon ein grossz\u00fcgiges kulturelles Angebot.\u00a0 Die lichtdurchflutete Wohnung bietet ein angenehmes Wohngef\u00fchl mit herrlicher Weitsicht. Bei der Ausstattung der grossz\u00fcgigen Wohnfl\u00e4che wurden hochwertige Materialien verwendet. Die weiteren Elemente wurde formlich und farblich so abgestimmt, dass ein heimeliges Wohngef\u00fchl entsteht. Das Master-Schlafzimmer verf\u00fcgt \u00fcber eine Ankleide und Privat-Bad. Die grossz\u00fcgige K\u00fcche punktet mit Ger\u00e4ten unter anderem von Gaggenau und einem Food Center. Die Raumh\u00f6he von bis zu ca. 2.60 Metern verst\u00e4rkt das Gef\u00fchl von Gr\u00f6sse und Offenheit. Auf dem Dach des Geb\u00e4udes bietet die Sky Lounge, die exklusiv den Bewohnern zu Verf\u00fcgung steht, einen atemberaubenden Ausblick bis hin zu den Alpen.\u00a0 Nehmen Sie mit uns Kontakt auf und lassen Sie uns \u00fcber Ihren Wohntraum sprechen. Weitere Informationen und Wohnungen finden Sie unter www.wolkenwerk.ch.</p>',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/38df6618ea790d97a8b916f64eab07fe728c50aa2b57ad5615c75e96f7176e79.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/5527c01b091fdaeaa1f6163cc2236fefa63b51c2110da92f9c9e085eaf3ae376.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/14d0ed1896f38178a11c1f5ee5cae949a5ac98ff957c7f45a84c01740a40f0a8.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/39841af8bc0f16c1ebb67d1ebe1aa7a61a4a78669b882238b1249b2cc9fa52bf.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/66fe8c1215a4be87091bf6885dad86bbd46860e79cdda0dca9712a1ec06b90cf.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/ac8a4c990d16c8fd81062aeb5f0a98ae33d680fc2c8253e73460b5a0dae4236f.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/0e877df9fd5b21603e34fc5c4e1a20f266d72b48c2775d4b1b7367a888f40a0d.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/2b1c2f6538599a980b116195e821180592ab19c4a9f2621479edf9161ee8e989.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/6c6500d6ca5298f84345acf4c7e4279a2a4fe8f06ac37e92249273704481d6f4.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/796646cc3875a97977c9202f156f1108695a01edd4343299ee9de9764533ce00.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/a1443c5958d7d7212ade77c3659954754afd4ba5327235406339063bb8348127.jpg',
            },
          ],
          isExclusive: false,
          url: 'https://www.homegate.ch/buy/3001233746',
          salePrice: 2675000,
          salePricePerSqm: 15735,
          currency: 'CHF',
          address: {
            street: 'Leutschenbachstrasse',
            houseNumber: '30',
            postCode: '8050',
            city: 'Z\u00fcrich',
          },
          coordinates: {
            latitude: 47.4157897,
            longitude: 8.5544882,
          },
          floorNumber: 18,
          buildingYear: 2020,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_attic',
          },
          livingArea: 170,
          numberOfRooms: 4.5,
          hasLift: true,
          hasParkingSpaces: true,
          isWheelchairAccessible: true,
          isPreciselyLocated: true,
        },
        {
          offerId:
            'b1beac9215e500e71782df0ae8cdc2388ed399d1c4df4270e45a3eb65ee8ebec',
          dealType: 'sale',
          startDate: '2021-11-16',
          daysOnMarket: 84,
          isActive: true,
          isPrivate: false,
          title: 'moderne Stadtwohnung an zentraler Lage',
          description:
            'Die \u00dcberbauung "Am Pfingstweidpark" ist Bestandteil von "City West", aus insgesamt sieben Geb\u00e4uden. City West befindet sich westlich des Zentrums von Z\u00fcrich. Die Liegenschaft wurde 2013 fertig gestellt und \u00fcberzeugt durch die scharmanten Wohnungen. Zudem wurden die Wohnungen im Minergie-Standard erstellt.  \n \nDie 2.5-Zimmer-Wohnung befindet sich im Erdgeschoss und erf\u00fcllt hohe Anspr\u00fcche:  \n \n- lichtdurchflutetes Wohnzimmer mit bodentiefen Fensterfronten \n- offen gestaltete Wohnk\u00fcche mit hochwertigen Materialien und Ger\u00e4ten \n- ein geschlossenes Zimmer mit Hochbett King Size  \n- Badezimmer mit begehbarer Dusche, Lavabo und Toilette \n- Reduit mit Waschmaschine und Tumbler sowie Platz f\u00fcr Vorr\u00e4te \n- gedeckter Sitzplatz mit begr\u00fcntem Sichtschutz \n- Raumh\u00f6he in der gesamten Wohnung betr\u00e4gt 3.50 Meter \n \nZur Wohnung geh\u00f6rt zudem ein Keller im Untergeschoss. Die Wohnung kann bei Wunsch auch m\u00f6bliert \u00fcbernommen werden. \n \nSind Sie an dieser urbanen Stadtwohnung interessiert? Gerne stehen wir Ihnen f\u00fcr weitere Details und f\u00fcr eine Besichtigung zur Verf\u00fcgung. \n \nWeitere Infos finden Sie zudem unter: \n \n<b>www.bestandesimmobilien.ch</b> \n \nMATMA - MEHR MENSCH - MEHR ZUHAUSE>\n\n\n\n\n\n',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/c3eee018744f874906169927dc777bf794c2bea1564b79b9c96e877c963c9684.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/4e029f8c10e65a4d795f6048340ea0156c6150b8b47852de055a7c63c89d64f6.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/226b425035305fea4258572da1ed9363030cd9494bee251c9db16390be6aa47a.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/f2bb7db1454b22bfdf1baac7cd0c34fab7d45bdc91d0c75fa49ea8c87588a3a4.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/86e3bba794214bc73f15937fb7f5427db1a6fa7c286879253518ee4400136681.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/fbc88fae3845899966f478058b869ff8421cc794a4660c159692f626bf85b0e9.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/aquaman/images/full/0144fef4970e53314644c9f971ac5986607ce386e68244e80846e78146b66ba6.jpg',
            },
          ],
          contactInfo: {
            inquiryPerson: {
              name: 'Markus Denzler',
              phone: '044 947 50 06',
            },
          },
          isExclusive: false,
          url: 'https://www.homegate.ch/buy/3001364281',
          salePrice: 1290000,
          salePricePerSqm: 23036,
          currency: 'CHF',
          address: {
            street: 'Turbinenstrasse',
            houseNumber: '50',
            postCode: '8005',
            city: 'Z\u00fcrich',
          },
          coordinates: {
            latitude: 47.386761852011,
            longitude: 8.513901301357,
          },
          buildingYear: 2013,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_normal',
          },
          livingArea: 56,
          numberOfRooms: 2.5,
          hasLift: true,
          isPreciselyLocated: true,
        },
        {
          offerId:
            'be16625cdd752593932e47c9fd71e46530ae2931ad2d7c9552d6980b9fd900de',
          dealType: 'sale',
          startDate: '2021-11-01',
          daysOnMarket: 99,
          isActive: true,
          isPrivate: false,
          title: 'Duplexwohnung an bester Lage in Z\u00fcrich-Fluntern',
          description:
            'Zum Verkauf steht eine 2015 stilvoll totalsanierte Duplexwohnung im beliebten Fluntern-Quartier. Diese bietet mit 169 m2 Wohnfl\u00e4che und 81 m2 gut integrierter Nebenfl\u00e4che auf zwei Etagen viel Raum, die eigenen Wohntr\u00e4ume zu verwirklichen und diese zu geniessen. Der private, terrassierte Garten von 204 m2 ist von beiden Etagen her zug\u00e4nglich.\nDas ger\u00e4umige Esszimmer, die K\u00fcche mit Essbereich sowie ein zus\u00e4tzlicher Schlaf- oder Wohnbereich befinden sich zusammen mit einem modernen Badezimmer im Gartengeschoss. Diese Etage bietet \u00fcberdies direkten Zugang zum ersten Teil des eigenen Gartens mit grossz\u00fcgigem Sitzplatz sowie zu einem 9 m2 grossen Balkon. Eine elegante, breite Holztreppe im Herzen der Wohnung f\u00fchrt Sie hinunter in den unteren Wohnbereich, den Master Bedroom sowie die eigene, hochwertig ausgebaute Wellness-Oase mit grosser Sauna. Ebenfalls im Erdgeschoss befindet sich der bisher als Bibliothek genutzte Raum.\nDer offene Charakter dieser Duplexwohnung, mit wenigen abschliessbaren T\u00fcren, kann mit einer Grundrissoptimierung auch perfekt auf Familien und Paare angepasst werden. Hierzu haben wir Ihnen eine m\u00f6glich Umbaustudie von Studio Milani Simon erstellen lassen.\nEin Keller im Untergeschoss, zwei Einstellpl\u00e4tze sowie ein Weinkeller zur gemeinsamen Nutzung geh\u00f6ren ebenfalls zur Immobilie.\nMit den hochwertig verarbeiteten Materialien, den grossz\u00fcgigen Fl\u00e4chen, dem lauschigen Garten und dem eigenen Spa-Bereich erlaubt Ihnen diese Eigentumswohnung ein Leben in optimaler Balance zwischen urbanem Leben sowie Ruhe und Entspannung.\n\nDie Immobilie:\n\u2022 mit 4.5 Zimmern\n\u2022 169 m2 Wohnfl\u00e4che\n\u2022 81 m2 Nebennutzfl\u00e4che (Hobby, Fitness oder B\u00fcro / Wellness-Oase)\n\u2022 Zwei Einstellpl\u00e4tze\n\u2022 Lauschiger Garten (204 m2) mit grossem Sitzplatz\nDas Besondere:\n\u2022 Grosse, stilvoll und hochwertig totalsanierte Eigentumswohnung\n\u2022 Beste Lage am Z\u00fcrichberg, optimal erschlossen, N\u00e4he zu Kultur- und Freizeitaktivit\u00e4ten\n\u2022 Luxuri\u00f6ser R\u00fcckzugsort f\u00fcr gehobene Anspr\u00fcche\n\u2022 Wohnen, Arbeiten und Erholen in den eigenen vier W\u00e4nden\nBaujahr: 1980\nHeizungsart: Gas-Heizung',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/mrkrabs/images/full/bd25462cfae3ac4419298b026fefa69e1b40c1da.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/mrkrabs/images/full/d9c93858e14d48709636ae2ab8dc273ae84a09ef.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/mrkrabs/images/full/d341efd450af4e8e0b4cd23a67166983146a22e5.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/mrkrabs/images/full/051fb58eb37bf96944cf8ceea629bfe073a00cb4.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/mrkrabs/images/full/3242e69acf31ecbc165e9a93c4640fcbaadcd54e.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/mrkrabs/images/full/19b4ca96d872188316a4eb3a5fe48720bc8be58d.jpg',
            },
          ],
          contactInfo: {
            agency_name: 'Ginesta Immobilien AG',
            contact_number: '+41449107733',
            contact_person: '',
          },
          isExclusive: false,
          url: 'https://www.immobilier.ch/en/buy/apartment/zurich/zurich/ginesta-immobilien-ag-807/duplex-apartment-in-the-best-location-in-zurich-fluntern-642876',
          salePrice: 3780000,
          salePricePerSqm: 22367,
          currency: 'CHF',
          address: {
            postCode: '8044',
            city: 'Z\u00fcrich',
          },
          coordinates: {
            latitude: 47.3813111,
            longitude: 8.5870568,
          },
          buildingYear: 1980,
          propertyType: {
            code: 'apartment',
            subcode: 'house_semi_detached',
          },
          livingArea: 169,
          numberOfRooms: 4.5,
          hasLift: true,
          isPreciselyLocated: false,
        },
        {
          offerId:
            'cc9615d259c155df77019c5ade2b175f5f4c83d8ed0d93923a42dd2566b04763',
          dealType: 'sale',
          startDate: '2021-09-23',
          daysOnMarket: 138,
          isActive: true,
          isPrivate: false,
          title: 'Top modernes Einfamilienhaus mit Infinity Pool',
          description:
            'Was f\u00fcr eine Neubau-Gelegenheit an Z\u00fcrcher Traumlage, die mit ihrer formsch\u00f6nen Architektur sofort gef\u00e4llt, innen mit der raffinierten Aufteilung und dem hochwertigen Ausbau \u00fcberzeugt und schlussendlich mit dem beleuchteten Infinity-Pool endg\u00fcltig jedes Geniesserherz f\u00fcr sich gewinnt.\nBereits die Tiefgarage, die man sich mit dem Nachbar teilt, zeigt die Raffinesse, wie hier der Raum und die Hanglage von A-Z ideal genutzt wurde. So erwartet Sie bereits im UG ein als Fitness/-Wellnessraum, B\u00fcro oder Studio nutzbares sehr grosses Zimmer mit Aussenzugang und Dusche/WC, der Bastelraum und der Lift, der alle Etagen erschliesst.\nDas Erdgeschoss bezaubert mit seiner Ausrichtung zur Sonne und angenehmer Grossz\u00fcgigkeit, dies beinhaltet Wohnen, Essen und Kochen, dazu zwei Nasszellen und ein Studio. Geht man auf den sch\u00f6nen Sitzplatz, erwartet einem der beleuchtete Infinity Pool mit Gegenstromanlage. Im Obergeschoss liegen die drei Schlafzimmer, zwei davon mit Zugang zum Balkon. Das T\u00fcpfelchen auf dem Wohlf\u00fchl-i ist das Dachgeschoss mit der gedeckten ca. 18.5 m\u00b2 Terrasse und dem Weitblick bis zum See und Uetliberg.\nF\u00fcr perfekten Wohnkomfort sorgen viele Einbauspots, 2 hochwertige Herzogk\u00fcchen und insgesamt 4 Nasszellen wie im Luxushotel.\nSind Sie bereit f\u00fcr Z\u00fcrichs sch\u00f6nste Seite? Wir freuen uns auf Ihre Anfrage.\nDie Immobilie:\n\u2022 8-Zimmer Haus mit Infinity Pool im begehrten Z\u00fcrcher Hirslanden\n\u2022 In ruhigem 30er-Zone-Wohnquartier\n\u2022 Traumhafte Aussicht vor allem aus den oberen Etagen \u00fcber die Stadt und den See\n\u2022 Ganzt\u00e4gig besonnt\n\u2022 Wohnfl\u00e4che ca. 329 m\u00b2\n\u2022 Nebenfl\u00e4chen ca. 54 m\u00b2\n\u2022 Grundst\u00fcck 526 m2\n\u2022 Top-Ausbau mit Lift\n\u2022 Erdsonden-W\u00e4rmepumpe mit W\u00e4rmeverteilung \u00fcber Bodenheizung\n\u2022 4 Tiefgaragenpl\u00e4tze\nBaujahr: 2021\nHeizungsart: W\u00e4rmepumpe',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/mrkrabs/images/full/00d4a0429bfe04f03673637afcda1d0b43285495.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/mrkrabs/images/full/fcbb429858261743227f61cf8e2946add0477282.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/mrkrabs/images/full/2b5066b43f4e2ba25ff83e6c7ccdb269e3613f74.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/mrkrabs/images/full/c82ab3cceb81ea9146ffcbe850c52a6af728fa1c.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/mrkrabs/images/full/fdf192fd3c1e8144ebddb6672f966c3f3520cc66.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/mrkrabs/images/full/19b4ca96d872188316a4eb3a5fe48720bc8be58d.jpg',
            },
          ],
          contactInfo: {
            agency_name: 'Ginesta Immobilien AG',
            contact_number: '+41449107733',
            contact_person: '',
          },
          isExclusive: false,
          url: 'https://www.immobilier.ch/en/buy/house/zurich/zurich/ginesta-immobilien-ag-807/top-modern-single-family-house-with-infinity-pool-626233',
          salePrice: 8900000,
          salePricePerSqm: 27052,
          currency: 'CHF',
          address: {
            postCode: '8032',
            city: 'Z\u00fcrich',
          },
          coordinates: {
            latitude: 47.3679412,
            longitude: 8.5695974,
          },
          buildingYear: 2021,
          propertyType: {
            code: 'house',
            subcode: 'house_detached',
          },
          livingArea: 329,
          landArea: 526,
          numberOfRooms: 8.0,
          isWheelchairAccessible: true,
          isPreciselyLocated: false,
        },
        {
          offerId:
            'a2843cf4a2de791827be63ee40302cb2c02c9fd27315435e361ecca74eab98f0',
          dealType: 'sale',
          startDate: '2021-09-23',
          daysOnMarket: 138,
          isActive: true,
          isPrivate: false,
          title:
            'Heimelige 3.5 Zi-WHG Potenzial zur Erweiterung auf 4.5 Zimmer',
          description:
            'Heimelige 3.5 Zi-WHG Potenzial zur Erweiterung auf 4.5 Zimmer  \r\n  \r\nDiese sch\u00f6ne und seltene Wohnung im Herzen des Z\u00fcrcher Seefelds ist eine einzigartige Gelegenheit und liegt ruhig in einer Einbahnstrasse mit wenig L\u00e4rm. Der See sowie diverse Einkaufsm\u00f6glichkeiten sind alle zu Fuss in K\u00fcrze erreichbar. Das Seefeld bietet die besten Bildungs-, Sport- und Freizeitm\u00f6glichkeiten, sowie optimale Anbindungen an den \u00d6V.  \r\nWir freuen uns auf Ihre Anfrage!  \r\n  \r\n**Genaue Adresse verf\u00fcgbar nach Registrierung auf neho.ch**.  \r\n**AN EINER BESICHTIGUNG INTERESSIERT? BITTE ANMELDEN: https://neho.ch/p/8008-21-1**  \r\n  \r\nUnique opportunity in an exceptional location in beautiful Seefeld  \r\n  \r\nThis beautiful and rare apartment in the heart of Zurich Seefeld is a unique opportunity and is quietly located in a one-way street with little noise. The lake and various shopping facilities are all within walking distance. The Seefeld offers the best educational, sports and recreational opportunities, as well as optimal public transport connections.  \r\nWe are looking forward to your inquiry!  \r\n  \r\n**Exact address available upon registration on neho.ch**.  \r\n**INTERESTED IN VISITING THE PROPERTY? PLEASE REGISTER FIRST : https://neho.ch/p/8008-21-1**  \r\n  \r\n',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/eaeb18eb12a4569a21f46703c6c12f0936b6327e12f0235aa5dbd3cb59397363.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/7ac4bdbe092358667ab31c079ac5ded7e5799d63cd671c462a98854b19100fb3.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/318da71d655190234a4f8e568d6c9df2a1f46043aa7e0a1688bdfbcfbdcb458f.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/4c285e062e38783fb4517adf9823895e1fa375416b8903eaf66143552ca9904a.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/4efb3561b037c19be2cd345aaa5e2e6b949b46a65193e52dc2f7a8a57161d4f4.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/2f426a3bfe8b2863eeb73ed5bfb39b88ca2fbd420b28de831f7cae8229141781.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/9fd1be57142e07a0cd0d0754d180ae4d8331c77755427071179487bc550d4486.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/86be7f04fd17510d90614565dc5ea7d03717621694c733360bc6ec334379de0d.jpg',
            },
          ],
          contactInfo: {
            webUrl: 'http://www.neho.ch',
            isGuest: false,
            logoUrl:
              'https://www.immoscout24.ch/resources/memberlogos/L924306-R.png',
            lastName: 'Robert Mayr',
            userType: 'M',
            reference: 'Robert Mayr',
            companyName1: 'Neho',
            showLogoOnSerp: true,
            isAccountMigrated: true,
            logoUrlDetailPage:
              'https://www.immoscout24.ch/resources/memberlogos/L924306-R.png',
          },
          url: 'https://www.immoscout24.ch/en/d/flat-buy-zuerich/6664925',
          salePrice: 1848000,
          salePricePerSqm: 22000,
          currency: 'CHF',
          address: {
            street: 'Z\u00fcrich',
            postCode: '8008',
            city: 'Z\u00fcrich, Kreis 1 (Zurich)',
          },
          coordinates: {
            latitude: 47.35671,
            longitude: 8.55963,
          },
          floorNumber: 1,
          buildingYear: 1959,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_normal',
          },
          livingArea: 84,
          numberOfRooms: 3.5,
          isPreciselyLocated: false,
        },
        {
          offerId:
            'f327d109590ba649fb1fc7f7c130a2d6fb8f7e1cb8a17d19e728a05d93ace79a',
          dealType: 'sale',
          startDate: '2021-06-22',
          daysOnMarket: 231,
          isActive: true,
          isPrivate: false,
          title: 'ZHOOOM - Z\u00fcrich',
          description:
            '**ZHOOOM - HOCHWERTIG & STYLISCH!**  \r\n   \r\n  \r\nZHOOOM ist ein spannendes Geb\u00e4ude. Von aussen wirkt es dezent. Innen aber \u00fcberrascht es durch die sich nach aussen \u00f6ffnenden R\u00e4ume. Die Architektur sowie der Innenausbau entspricht einem sehr hohen Standard.  \r\n  \r\nDie 4.5-Zimmerwohnung bietet folgende Highlights:  \r\n  \r\n\r\n- Hochwertige Architektur\r\n- Spannender, funktionaler Grundriss\r\n- R\u00e4ume die sich zum Licht hin \u00f6ffnen\r\n- grossz\u00fcgiger, teilweise gedeckter Balkon mit ca. 19 m2\r\n- hochwertige Nassr\u00e4ume mit bodenebener Dusche\r\n- exklusive K\u00fcche mit High-End-Ger\u00e4ten\r\n- Raumh\u00f6he 2.54 m\r\n- Erdsondenheizung mit passiver K\u00fchlung f\u00fcr im Sommer\r\n- grossz\u00fcgige Ausbaubudgets\r\n- usw.\r\n\r\nZHOOOM liegt verkehrsg\u00fcnstig, wenige Minuten und Sie sind am Flughafen oder im Zentrum Z\u00fcrichs. ZHOOOM liegt aber auch direkt an einer Reihe von Sportanlagen. Beginnen Sie Ihr Training vor der Haust\u00fcre. Es verbindet eine besondere Lage zwischen Zentren mit besonderer Architektur sowie hoher Bauqualit\u00e4t.  \r\n  \r\nHaben wir Ihr Interesse geweckt? Dann kontaktieren Sie uns. Wir stehen Ihnen f\u00fcr weitere Ausk\u00fcnfte zum Projekt gerne zur Verf\u00fcgung und freuen uns auf Ihre Kontaktaufnahme.  \r\n  \r\nMehr Infos auf **www.zhooom.ch**  \r\n  \r\n',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/46e538a4044f34b05358e66b8325bfa7efa1154fda0ce70a83bef77a749cd55f.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/4f1f7fe61e218df51f8b15b265bcc8245404ee3ce076b170386fb8a14e21c389.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/197c2d2e1cc569ef3c6d7afe39914b3da5a5784511db05e226f083ebb900b29a.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/cd77c76752e54d82ba09b76e9b5739fb3da014d41574d4e5c44f07141a384061.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/05afa87f6cc757818aa16520dba14050aa867d62246cf1904202a0a6c96b4294.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/f09915492876298072bd813d81f267472bf0ac0e09cceff19731a57c60d24013.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/a0651b301f00df9064462b35712e1024d2f75d677e3fad7e831bc3772567e7de.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/76a642aa8268699f8a277a5e135b39d70661bbef5125dde4431718b1a414b414.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/785f796cd3d5b09a9d1955b67bb71b1ed6185c1e5761a63f3dd78f207d5deea0.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/robin/images/full/e745b55ecf1cc630795c06a84d4cb746da22f80bcc724a32342b1b2b359afa17.jpg',
            },
          ],
          contactInfo: {
            webUrl: 'http://www.redrealestate.ch',
            isGuest: false,
            logoUrl:
              'https://www.immoscout24.ch/resources/memberlogos/L5449-R.jpg',
            lastName: 'Andrea Fl\u00fckiger',
            userType: 'M',
            reference: 'Andrea Fl\u00fckiger',
            companyZip: '8008',
            companyCity: 'Z\u00fcrich',
            companyName1: 'RED Real Estate AG',
            companyStreet: 'Seehofstrasse 4',
            showLogoOnSerp: true,
            isAccountMigrated: true,
            logoUrlDetailPage:
              'https://www.immoscout24.ch/resources/memberlogos/L5449-R.jpg',
            companyPhoneBusiness: '043 543 21 94',
          },
          url: 'https://www.immoscout24.ch/en/d/flat-buy-zuerich/6560062',
          salePrice: 1410000,
          salePricePerSqm: 13178,
          currency: 'CHF',
          address: {
            street: 'Eichrainstrasse',
            houseNumber: '27',
            postCode: '8052',
            city: 'Z\u00fcrich, Kreis 11 (Zurich)',
          },
          coordinates: {
            latitude: 47.4289934,
            longitude: 8.5473802,
          },
          floorNumber: 2,
          buildingYear: 2022,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_normal',
          },
          livingArea: 107,
          numberOfRooms: 4.5,
          hasLift: true,
          isPreciselyLocated: true,
        },
        {
          offerId:
            '2ef4d957737a0098ab86e54bf924065ccc8fbdb925c342c5c97c5d36b2908a56',
          dealType: 'sale',
          startDate: '2021-06-02',
          daysOnMarket: 251,
          isActive: true,
          isPrivate: true,
          title:
            '4\u00bd rooms Attika in 8052 Z\u00fcrich  \u2013 Property Market by comparis.ch',
          description:
            'Zu verkaufen<br><br>Eine moderne und exclusive 4,5Zimmer Le Corbusier Attika-Maisonette Wohnung >138m2 mit hohem Ausbaustandard (128m2Netto), \u00fcber 3 Etagen und grosser ~90m2 Dachterrasse. Modern und hochwertig Renoviert!<br>An bevorzugter Top Lage, n\u00e4he Flughafen ist eine grosse moderne 4,5 ZimmerAttika-Maisonett Wohnung auf 3 Etagen mit grosser Dachterrasse zu vermieten.<br>Die Lage ist sehr Zentral und ruhig gelegen. \u00d6ffentlicher Verkehr, sowie Autobahnanschluss in alle Richtungen ist in 2 min. erreichbar. Schulen sowie Einkaufm\u00f6glichkeiten und Naherholungsgebiet liegen in unmittelbarer N\u00e4he. (Lage ist Unverbaubar)<br>EG:<br>grosses Entree<br>G\u00e4ste WC<br><br><br>moderne offene K\u00fcche mit Combisteamer, Komfortbackofen, grosser K\u00fchlschrank mit Tiefk\u00fchlkombi, Geschirrsp\u00fcler, grossem GlaskeramikKochfeld sowie Dampfabzug mit Abluft Boden mit Feinsteinplatten<br>grosser Gang der als Essecke oder B\u00fcro genutzt werden kann<br>Grosser Balkon mit Sicht in den ruhigen Garten<br><br>1. Obergeschoss:<br>3 Schlafzimmer<br>grosser Gang der auch als Ankleide genutzt werden kann<br>neu renoviertes Badezimmer mit begehbarer Dusche,<br>Doppel-Lavabo und WC<br>Einbauschr\u00e4nke<br>Reduit<br><br>2.Obergeschoss:<br>Grosse Dachterrasse ca.85m2 mit grossem Granit Tisch und Sitzb\u00e4nke (255x110) und grosse El. Sonnenmarkise (6m x 6m. )Teilverglasung Sicht/Windschutz, zus. Geschlossener Raum der als 2.K\u00fcche genutzt wird.<br><br>Die Stockwerke sind mit breiter grossz\u00fcgiger Wendeltreppe erschlossen.<br>Auf Wunsch 1 Parkplatz in der Tiefgarage ist verf\u00fcgbar.<br><br>Wohnung ist mit FTTH und Koax erschlossen. (Jegliche Providerwahl m\u00f6glich)<br>Haben wir Ihr Interesse geweckt?<br>Der Preis ist f\u00fcr eine Wohnung.<br>Es steht ebenfalls eine 2. nahezu baugleiche 4.5 Wohnungen zur Verf\u00fcgung jedoch mit Gartensitzplatz und eigener Sauna im Im Kellergeschoss. <br><br><br><br>Die beiden Wohnungen k\u00f6nnen nur zusammen gekauft werden!<br>Der Kaufpreis ist pro Wohnung!!!!<br><br>Auf Wunsch stehen 2 breite GaragenPP nebeneinander zur Verf\u00fcgung.<br><br>Beide Wohnungen sind vermietet und w\u00fcrden weiter in Miete bleiben.<br><br>Ideal als Invest / oder Anlage<br><br>Wir freuen uns auf Ihre Kontaktaufnahme.<br>"Keine Makler, oder Vermittler erw\u00fcnscht"<br><br>SDLG Immo GmbH',
          images: [
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/batman/images/full/84bfc0a869aabac979342671795dbb678f1a6f87.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/batman/images/full/e3d3e0f66193431b600ff0cd9b4f242b4003e7cd.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/batman/images/full/8e889ded12d71c59639cec536e391610733a54d3.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/batman/images/full/ccca7626fde12c02fa49a7f1090e25abaa6815a3.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/batman/images/full/f29c2aa0ab1eb34af14a268220cc5dd199d98652.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/batman/images/full/6dc65e41150c9b588c4bb6a7e8c1f784347e4ef3.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/batman/images/full/8d0852c0949c863e21816326d9f1af4d2f2ddd5e.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/batman/images/full/c9a7f06b3e57f1cda4b1297fae839e1835d2f272.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/batman/images/full/551f37096bf652748c3b0e2f733c5aca427b4797.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/batman/images/full/e709ec670f7a6a5530f987e495a8e95a06dda883.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/batman/images/full/c892d750bc531969adf22408297ee2b4fa79d45b.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/batman/images/full/c4afce908b3abeb46e0a531ec9f815c57cf85899.jpg',
            },
            {
              url: 'https://storage.googleapis.com/pricehubble-production-pipeline-public/CH/batman/images/full/16ff971acc234b38e2b82208aa42a2ca2b3bda4f.jpg',
            },
          ],
          isExclusive: false,
          url: 'https://en.comparis.ch/immobilien/marktplatz/details/show/25736611',
          salePrice: 2200000,
          salePricePerSqm: 15942,
          currency: 'CHF',
          address: {
            street: 'R\u00fcmlangstrasse',
            houseNumber: '51',
            postCode: '8052',
            city: 'Z\u00fcrich',
          },
          coordinates: {
            latitude: 47.4288168900316,
            longitude: 8.54198038218018,
          },
          floorNumber: 1,
          buildingYear: 1965,
          propertyType: {
            code: 'apartment',
            subcode: 'apartment_attic',
          },
          livingArea: 138,
          numberOfRooms: 4.5,
          hasParkingSpaces: true,
          isPreciselyLocated: true,
        },
      ],
      totalItems: 44,
    },
    time: 0.88,
  },
  severity: 'INFO',
};
