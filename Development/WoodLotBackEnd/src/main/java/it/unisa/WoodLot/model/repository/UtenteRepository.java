package it.unisa.WoodLot.model.repository;

import it.unisa.WoodLot.model.entity.Utente;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Interfaccia che definisce le operazioni per la modellazione e l'accesso
 * alle informazioni persistenti relative ad un utente
 *
 * @author Alessia Ture
 * @see Utente
 */
public interface UtenteRepository extends JpaRepository<Utente, Long> {
}
