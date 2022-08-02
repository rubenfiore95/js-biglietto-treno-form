ticketForm.addEventListener('submit', calcPrice);

function calcPrice(submit)
{
    submit.preventDefault();
    

    //Mi prendo gli input
    const km = document.getElementById('kmdapercorrere').value;
    const eta = document.getElementById('etainserita').value;
    ;

    //variabili prezzo e sconti
    const PrezzoSingolo = 0.21;
    const ragazzi = 0.20;
    const vecchi = 0.40;

    //Calcolo il prezzo
    let PrezzoFinale = PrezzoSingolo * km;

    //sconto under 18
    if (eta < 18) 
    {
        PrezzoFinale -= (PrezzoFinale * ragazzi);
    } 
    //sconto over 65
    if (eta >= 65) 
    {
        PrezzoFinale -= (PrezzoFinale * vecchi);
    } 
    //Restituisco l'output
    const output = document.getElementById('output');
    if (km == 0 || eta == 0) 
    {
        output.innerHTML = 'Riempi i campi e riprova.';
    } else {

     output.innerHTML = 'Lunghezza Percorso: ' + km + 'km; ' + 'Età passeggero: ' + eta + '; ' + 'Prezzo: ' + PrezzoFinale + "€";
    }
    

    //console.log(PrezzoFinale);
}