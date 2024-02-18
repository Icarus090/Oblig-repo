const bilettRegister=[];
function visBilettRegister(){
    // skriv ut
    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th>" + "<th>Telefonnr</th><th>Epost</th>"+
        "</tr>";
    for (let p of bilettRegister){
        ut += "<tr>";
        ut += "<td>" + p.film + "</td><td>" + p.antall + "</td><td>" + p.fornavn + "</td><td>" + p.etternavn + "</td><td>" + p.telefonnr +
            "</td><td>" + p.epost + "</td>";
        ut += "</tr>";
    }
    document.getElementById("Transaksjon").innerHTML=ut;
}
function tickets(){
    const film = document.getElementById("Film").value;
    const antall = document.getElementById("Antall").value;
    if (antall === "") {
        antallError.textContent = "Må skrive noe inn i tall";
    } else{
        antallError.textContent = "";
    }

    const fornavn = document.getElementById("Fornavn").value;
    const fornavnError = document.getElementById("fornavnError");
    if (fornavn === "") {
        fornavnError.textContent = "Oppgi fornavnet ditt";
    } else{
        fornavnError.textContent = "";
    }

    const etternavn = document.getElementById("Etternavn").value;
    if (etternavn === "") {
        etternavnError.textContent = "Oppgi etternavnet ditt";
    } else{
        etternavnError.textContent = "";
    }

    const telefonnr = document.getElementById("Telefonnr").value;
    if (telefonnr === "") {
        telefonnrError.textContent = "Oppgi korrekt Telefonnummer ditt";
    } else{
        telefonnrError.textContent = "";
    }

    const epost = document.getElementById("Epost").value;
    if (epost === "") {
        epostError.textContent = "Oppgi Eposten din";
    } else{
        epostError.textContent = "";
    }

    const person = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnr: telefonnr,
        epost: epost
    };
    bilettRegister.push(person);

    document.getElementById("Film").value = "0";
    document.getElementById("Antall").value = "";
    document.getElementById("Fornavn").value = "";
    document.getElementById("Etternavn").value = "";
    document.getElementById("Telefonnr").value = "";
    document.getElementById("Epost").value = "";
    visBilettRegister();
}

function clearBilettRegister(){
    bilettRegister.length = 0;
    visBilettRegister();
}