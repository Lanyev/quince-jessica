import React from 'react';
import InvitationCard from '../components/InvitationCard';

const Invitaciones = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 py-12 bg-white/90 rounded-lg shadow-lg my-8 content-card">
        <div className="text-center mb-16">
          <h1 className="font-script text-6xl md:text-7xl font-bold text-primary mb-3">Invitaciones</h1>
          <p className="font-serif text-2xl md:text-3xl text-primary-light italic">Comparte la emoción</p>
          <div className="flex justify-center mt-6">
            <div className="w-32 h-1 bg-primary rounded-full"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <InvitationCard />
          
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <h3 className="font-script text-3xl text-primary mb-4">Invita a tus seres queridos</h3>
            <div className="font-serif text-gray-700 space-y-4">
              <p>
                Crea una invitación personalizada para compartir en tus redes sociales o enviar 
                por mensajería a tus familiares y amigos. Personaliza el nombre del invitado
                para hacer la invitación más especial.
              </p>
              <p>
                Una vez creada la invitación, puedes descargarla como imagen o compartirla directamente
                desde tu dispositivo. ¡Haz que todos se enteren de esta celebración tan especial!
              </p>
            </div>
          </div>

          <div className="mt-16 p-6 bg-primary/5 rounded-xl border border-primary/10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h4 className="font-script text-2xl text-primary mb-3">Instrucciones</h4>
                <ol className="list-decimal list-inside font-serif text-gray-700 space-y-2">
                  <li>Ingresa el nombre de la persona a la que quieres invitar</li>
                  <li>Haz clic en "Crear invitación digital"</li>
                  <li>Descarga la imagen o compártela directamente</li>
                  <li>La invitación incluye toda la información necesaria sobre la ceremonia y recepción</li>
                </ol>
              </div>
              <div className="md:w-1/2">
                <h4 className="font-script text-2xl text-primary mb-3">Ventajas</h4>
                <ul className="list-disc list-inside font-serif text-gray-700 space-y-2">
                  <li>Personalización rápida y sencilla</li>
                  <li>Comparte fácilmente en redes sociales o por mensaje</li>
                  <li>Ahorra papel y contribuye al medio ambiente</li>
                  <li>Invita a última hora a quien se te haya olvidado</li>
                  <li>Opción complementaria a las invitaciones físicas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invitaciones;
