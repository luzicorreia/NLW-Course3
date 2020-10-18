// const db = require('./db');
const Database = require('./db');

Database.then(async db => {
    // Inserir dados na tabela
    await db.run(`
    INSERT INTO orphanages (
        lat,
        lng,
        name,
        about,
        whatsapp,
        images,
        instructions,
        opening_hours,
        open_on_weekends
    ) VALUES (
        "-23.6815314",
        "-46.8754974",
        "Lar dos meninos - Boys",
        "Presta assistência a crianças de 06 a 15 anos em situação de risco ou vulnerabildiade social.",
        "987562451",
        "https://images.unsplash.com/photo-1562694909-3d53309d5e14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        "Venha nos visitar. Traga seu carinho",
        "horário de visita da 18h ate 8h",
        "1"
    );
    `) 

    // Consultar dados na tabela
       const selectedOrphanages = await db.all("SELECT * FROM orphanages")
       console.log(selectedOrphanages)

    // Consultar somente 1 orfanato pelo ID
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)
})