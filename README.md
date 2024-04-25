# Oblig1
==============

OsloMet brukernavn: S376930

GitHub brukernavn: Icarus090

GitHub repo URL: https://github.com/Icarus090/Oblig-repo

Fullt Navn: Jakub Pawel Zych

Kort beskrivelse av applikasjon:
Denne aplikasjonen har i oppdrag å la brukere opprette og/eller
slette Kinobiletter. Den tar inn informasjon som: antall biletter,
hvilken film, fornavn, etternavn, tlfnnr og epost.
Dette blir gjort av et system oppbygd av Spring boot i backend.

Vi har også relasjonsdatabaser i bruk for å kunne lagre bestillingene
"orderRep"-klassen har metoder som kan lagre nye bestillinger,
hente utvalgte bestillinger og en funksjon som kan slette alle 
bestillingene

OrderController-klassen eksponerer dette som HTTP-'endpoints'. 
Dette gir muligheten for klientene kan opprette, slette eller hente 
ulike bestillinger. Applikasjonen bruker også H2 in-memoery database,
noe som fører til at absolutt all dataen går tapt hvis applikasjonen 
restartes