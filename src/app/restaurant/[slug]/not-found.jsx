import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>404 - Restaurant introuvable</h2>
      <p className="mb-6">Désolé, nous n'avons pas trouvé le restaurant correspondant</p>
      
      {/* lien de retour */}
      <Link 
        href="/" 
      >
        Retour à la page d'accueil des restaurants
      </Link>
    </div>
  );
}