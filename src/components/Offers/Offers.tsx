import axios from 'axios';
import { BiSearch } from "react-icons/bi";
import {useRef} from "react";
function Offers() {

    const inputJobName = useRef<HTMLInputElement | null>(null);
    const fetchJobOffers = async () => {
        let keyWord = inputJobName.current?.value;
        console.log(keyWord);
        const apiUrl = `https://api.emploi-store.fr/partenaire/offresdemploi/v2/offres/search?motsCles=${keyWord}`;
        const apiKey = '3efaea20eb1ef684d47edff217e3df40f55e562b1c5df90901997fc8a28b6122';
        try {
            const response = await axios.get(apiUrl, {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                },
                params: {
                    // Paramètres de recherche (ex. : mots-clés, lieu, etc.)
                },
            });
            const jobOffers = response.data;
            // Traitez les offres d'emploi ici
        } catch (error) {
            // Gérez les erreurs
        }
    };

// Appelez fetchData où vous en avez besoin dans votre composant React.


    return (
        <>
            <div className="mb-6 mt-6 flex gap-3 items-center">
                <label htmlFor="job-name" className="whitespace-nowrap block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job name</label>
                <input ref={inputJobName} type="text" id="job-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <button onClick={fetchJobOffers} className="hover:cursor-pointer pl-4 pr-4 pt-2 pb-2 rounded-lg bg-gray-800 dark:bg-gray-100 text-white hover:bg-gray-500 dark:hover:bg-gray-400 transition duration-300">
                    <BiSearch size={24}/>
                </button>
            </div>
        </>
    );
}
export default Offers;