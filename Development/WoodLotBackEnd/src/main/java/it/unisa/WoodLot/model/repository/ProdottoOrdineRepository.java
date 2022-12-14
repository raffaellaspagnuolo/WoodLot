package it.unisa.WoodLot.model.repository;

import it.unisa.WoodLot.model.entity.ProdottoOrdine;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Interfaccia che definisce le operazioni per la modellazione e l'accesso
 * alle informazioni persistenti relative ad un prodotto ordine
 *
 * @author Alessia Ture
 * @see ProdottoOrdine
 */
public interface ProdottoOrdineRepository extends JpaRepository<ProdottoOrdine, Long> {
}
