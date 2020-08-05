
/**
 * @returns {Promise}
 */
export function fetchCategories() {
    // Création d'une promesse pour le fun mais on pourrait directement envoyer
    // la variable globale window.categories
    return new Promise((resolve, reject) => {
        resolve({
            data: {
                'hydra:member': window.categories,
            },
        });
    });
}
