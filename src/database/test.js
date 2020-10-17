const db = require('./db');
const Database = require('./db');

Database.then(function(db) {
    // Inserir dados na tabela
    db.run(`
    INSERT INTO orphanages (
        lat,
        lng,
        name,
        whatsapp,
        images,
        instructions,
        opening_hours,
        open_on_weekends
    ) VALUES (
        "-23.6815314",
        "-46.8754974",
        "Lar das meninas - Girls",
        "Presta assistência a crianças de 06 a 15 anos em situação de risco ou vulnerabildiade social.",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhands&psig=AOvVaw22uQLWtG_lVHPjZyKjogh8&ust=1602970616598000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDP44OJuuwCFQAAAAAdAAAAABAI",
        "Venha nos visitar. Traga seu carinho",
        "horário de visita da 18h ate 8h",
        "1"
    );
    `)

    // Consultar dados na tabela
})