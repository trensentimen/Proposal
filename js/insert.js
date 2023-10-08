
import { setInner } from "https://jscroot.github.io/element/croot.js";
import { get } from "https://jscroot.github.io/api/croot.js";

// import data from "../json/porposal.json" assert { type: "json" };


const responsFungsi = (data) => {
    setInner("judulProposal", data.article.judulProposal);

    //Base
    setInner('basetitle', data.home.title);
    setInner('basedesc', data.home.description);

    //Cover
    setInner("judulCover", data.cover.judulCover);
    setInner("proyek", data.cover.proyekProposal);
    setInner("tujuan", `
        <br> ${data.cover.tujuan[0]}
        <br> ${data.cover.tujuan[1]}
        <br> ${data.cover.tujuan[2]}
    `);
    setInner("namateam", `
        <p>${data.team[0].name}</p>
        <p>${data.team[1].name}</p>
    `)
    setInner("prodi", data.cover.prodi);
    setInner("univ", data.cover.univ);
    setInner("kota", data.cover.kota);
    setInner("tahun", data.cover.tahun);

    //Abstract
    setInner("abstract", `
    <h2>Abstract</h2>
        <p>${data.article.abstract[0]}</p>
        <p>${data.article.abstract[1]}</p>
        <p>${data.article.abstract[2]}</p>
    `);

    //Pengantar
    setInner("pengantarProposal", `
        <h2>Pengantar</h2>
        <p>${data.article.pengantarProposal}</p>
    `);

    //Latar Belakang
    let listLatarBelakang = data.article.latarBelakang4.map((item, index) => {
        return `<li>${item}</li>`;
    });
    setInner("latarBelakangProposal", `
        <h2>Latar Belakang</h2>
        <p>${data.article.latarBelakang1}</p>
        <p>${data.article.latarBelakang2}</p>
        <p>${data.article.latarBelakang3}</p>
        <ul>${listLatarBelakang.join("")}</ul>
        <p>${data.article.latarBelakang5}</p>
    `);

    //Deskripsi Website
    let listDeskripsiWebsite = data.article.deskripsiWebsite.map((item, index) => {
        return `<li>${item}</li>`;
    })
    setInner("deskripsiWebsite", `
        <h2>Deskripsi Website</h2>
        <ul>${listDeskripsiWebsite.join("")}</ul>
    `);

    //DesaindanFungsionalitas
    let listDesaindanFungsionalitas = data.article.DesaindanFungsionalitasList.map((item, index) => {
        return `<li>${item}</li>`;
    })
    setInner("desaindanFungsionalitas", `
        <h2>Desain dan Fungsionalitas</h2>
        <ul>${listDesaindanFungsionalitas.join("")}</ul>
    `);

    //Pemasaran
    setInner("pemasaran", `
        <h2>Pemasaran</h2>
        <p>${data.article.Pemasaran}</p>
        <p>${data.article.Pemasaran2}</p>
        <p>${data.article.Pemasaran3}</p>
    `);

    //waktuPelaksanaan
    setInner("waktuPelaksanaan", `
        <h2>Waktu Pengerjaan</h2>
        <p>${data.article.waktuPelaksanaan}</p>
    `);

    //Kesimpulan
    setInner("kesimpulan", `
        <h2>Kesimpulan</h2>
        <p>${data.article.kesimpulan}</p>
        <p>${data.article.kesimpulan2}</p>
        <p>${data.article.kesimpulan3}</p>
    `);

    //Team
    setInner("name2", data.team[0].name);
    setInner("email2", data.team[0].email);
    setInner("npm2", data.team[0].npm);
    setInner("name1", data.team[1].name);
    setInner("email1", data.team[1].email);
    setInner("npm1", data.team[1].npm);
    setInner("photo1", `<img src="${data.team[1].photo}" alt="image" width="112" height="28">`);
    setInner("photo2", `<img src="${data.team[0].photo}" alt="image" width="112" height="28">`);
};

await get("https://raw.githubusercontent.com/trensentimen/trensentimen.github.io/main/json/porposal.json", responsFungsi);

