package it.unisa.WoodLot.sevice.gestioneContadino;

import it.unisa.WoodLot.model.entity.Contadino;
import it.unisa.WoodLot.model.entity.ProdottoOrdine;
import it.unisa.WoodLot.model.repository.ContadinoRepository;
import it.unisa.WoodLot.model.repository.ProdottoOrdineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * La classe fornisce i metodi per la logica di business per la gestione dei contadini
 *
 * @author Alessia Ture
 */
@Service
public class GestioneContadinoService implements ContadinoService {
    @Autowired
    private ContadinoRepository contadinoRepository;

    @Autowired
    private ProdottoOrdineRepository prodottoOrdineRepository;

    /**
     * Restituisce l'elenco dei contadini presenti nel database
     *
     * @return
     */
    @Override
    public Iterable<Contadino> getElencoContadini() {
        return contadinoRepository.findAll();
    }

    /**
     * Restituisce l'elenco degli alberi che non sono stati assegnati a un contadino
     *
     * @return l'elenco degli alberi nello stato 'non assegnato'
     */

    @Override
    public Iterable<ProdottoOrdine> getAlberiNonAssegnati() {
        return prodottoOrdineRepository.findAllByStatoIs(ProdottoOrdine.Stato.NonAssegnato);
    }
}
