/**
 * ANATOMIX — Anatomy Data
 * Body system and organ metadata for the procedural model
 */

export const BODY_SYSTEMS = {
  skeletal: {
    id: 'skeletal',
    name: 'Skeletal System',
    icon: '🦴',
    color: '#e2e8f0',
    description: 'The skeletal system provides structural support, protects organs, and enables movement through its 206 bones.',
    parts: [
      {
        id: 'skull',
        name: 'Skull',
        description: 'The skull consists of 22 bones that protect the brain and support facial structures. It includes the cranium (8 bones) and the facial bones (14 bones).',
        funFact: 'A newborn baby has about 270 bones, but many fuse together as they grow, leaving adults with 206.',
        position: [0, 1.65, 0],
        scale: [0.22, 0.26, 0.24],
        shape: 'sphere',
      },
      {
        id: 'spine',
        name: 'Spinal Column',
        description: 'The spine consists of 33 vertebrae stacked in an S-curve. It protects the spinal cord, supports the head, and serves as an attachment point for the ribs and muscles.',
        funFact: 'You are about 1cm taller in the morning because your spinal discs decompress while you sleep.',
        position: [0, 0.95, -0.05],
        scale: [0.06, 0.7, 0.06],
        shape: 'cylinder',
      },
      {
        id: 'ribcage',
        name: 'Rib Cage',
        description: 'The rib cage consists of 24 ribs (12 pairs) that protect the heart, lungs, and other vital organs in the thoracic cavity.',
        funFact: 'About 1 in 200 people are born with an extra cervical rib.',
        position: [0, 1.1, 0],
        scale: [0.28, 0.3, 0.18],
        shape: 'ellipsoid',
      },
      {
        id: 'pelvis',
        name: 'Pelvis',
        description: 'The pelvis is a basin-shaped structure that supports the spinal column and protects the lower abdominal organs. It connects the torso to the legs.',
        funFact: 'The female pelvis is wider and shallower than the male pelvis to accommodate childbirth.',
        position: [0, 0.45, 0],
        scale: [0.26, 0.15, 0.16],
        shape: 'ellipsoid',
      },
      {
        id: 'left-femur',
        name: 'Left Femur',
        description: 'The femur (thighbone) is the longest, heaviest, and strongest bone in the human body. It extends from the hip to the knee.',
        funFact: 'The femur can support up to 30 times your body weight.',
        position: [-0.12, 0.05, 0],
        scale: [0.05, 0.4, 0.05],
        shape: 'cylinder',
      },
      {
        id: 'right-femur',
        name: 'Right Femur',
        description: 'The femur (thighbone) is the longest, heaviest, and strongest bone in the human body. It extends from the hip to the knee.',
        funFact: 'The femur can support up to 30 times your body weight.',
        position: [0.12, 0.05, 0],
        scale: [0.05, 0.4, 0.05],
        shape: 'cylinder',
      },
      {
        id: 'left-humerus',
        name: 'Left Humerus',
        description: 'The humerus is the long bone in the upper arm, connecting the shoulder to the elbow. It serves as an attachment point for many muscles.',
        funFact: 'Hitting your "funny bone" is actually hitting the ulnar nerve that runs along the humerus.',
        position: [-0.38, 1.05, 0],
        scale: [0.04, 0.3, 0.04],
        shape: 'cylinder',
      },
      {
        id: 'right-humerus',
        name: 'Right Humerus',
        description: 'The humerus is the long bone in the upper arm, connecting the shoulder to the elbow.',
        funFact: 'The humerus is the third longest bone in the body after the femur and tibia.',
        position: [0.38, 1.05, 0],
        scale: [0.04, 0.3, 0.04],
        shape: 'cylinder',
      },
    ],
  },

  muscular: {
    id: 'muscular',
    name: 'Muscular System',
    icon: '💪',
    color: '#ef4444',
    description: 'The muscular system comprises over 600 muscles that enable movement, maintain posture, and generate heat.',
    parts: [
      {
        id: 'pectorals',
        name: 'Pectoralis Major',
        description: 'The pectoralis major is a thick, fan-shaped muscle in the chest. It\'s the main muscle responsible for arm movement across the body.',
        funFact: 'The pectoralis major is one of the most powerful muscles in the upper body.',
        position: [0, 1.18, 0.1],
        scale: [0.3, 0.16, 0.08],
        shape: 'box',
      },
      {
        id: 'abdominals',
        name: 'Abdominals',
        description: 'The abdominal muscles form the front wall of the abdomen. They include the rectus abdominis ("six-pack"), obliques, and transverse abdominis.',
        funFact: 'Everyone has a six-pack — some are just hidden beneath a layer of body fat.',
        position: [0, 0.82, 0.1],
        scale: [0.22, 0.25, 0.06],
        shape: 'box',
      },
      {
        id: 'left-bicep',
        name: 'Left Biceps',
        description: 'The biceps brachii is a two-headed muscle in the upper arm responsible for forearm flexion and supination.',
        funFact: 'The biceps actually has very little to do with arm strength — the brachialis beneath it does most of the heavy lifting.',
        position: [-0.37, 1.08, 0.04],
        scale: [0.06, 0.12, 0.06],
        shape: 'ellipsoid',
      },
      {
        id: 'right-bicep',
        name: 'Right Biceps',
        description: 'The biceps brachii facilitates forearm flexion and supination, working in tandem with the triceps for arm movement.',
        funFact: 'The word "biceps" comes from Latin meaning "two-headed" — it has two points of origin.',
        position: [0.37, 1.08, 0.04],
        scale: [0.06, 0.12, 0.06],
        shape: 'ellipsoid',
      },
      {
        id: 'left-quad',
        name: 'Left Quadriceps',
        description: 'The quadriceps femoris is a large muscle group on the front of the thigh. It consists of four individual muscles and is the strongest muscle group in the body.',
        funFact: 'The quadriceps can generate a force of about 100 kg during activities like jumping.',
        position: [-0.13, 0.05, 0.04],
        scale: [0.09, 0.22, 0.08],
        shape: 'ellipsoid',
      },
      {
        id: 'right-quad',
        name: 'Right Quadriceps',
        description: 'The quadriceps femoris is crucial for walking, running, and jumping. It\'s the primary extensor of the knee joint.',
        funFact: 'Your quadriceps fire about 1,200 times during a 30-minute walk.',
        position: [0.13, 0.05, 0.04],
        scale: [0.09, 0.22, 0.08],
        shape: 'ellipsoid',
      },
      {
        id: 'deltoids',
        name: 'Deltoids',
        description: 'The deltoid muscle forms the rounded contour of the shoulder. It has three parts: anterior, lateral, and posterior, enabling arm movement in multiple directions.',
        funFact: 'The deltoid is named after the Greek letter delta (Δ) due to its triangular shape.',
        position: [0, 1.32, 0],
        scale: [0.42, 0.06, 0.12],
        shape: 'box',
      },
    ],
  },

  cardiovascular: {
    id: 'cardiovascular',
    name: 'Cardiovascular System',
    icon: '❤️',
    color: '#f43f5e',
    description: 'The cardiovascular system circulates blood through the body, delivering oxygen and nutrients while removing waste products.',
    parts: [
      {
        id: 'heart',
        name: 'Heart',
        description: 'The heart is a muscular organ that pumps blood through the circulatory system. It beats about 100,000 times per day, pumping approximately 7,500 liters of blood.',
        funFact: 'Your heart beats about 3 billion times in your lifetime and can continue beating even when disconnected from the body.',
        position: [-0.06, 1.15, 0.06],
        scale: [0.1, 0.1, 0.08],
        shape: 'sphere',
      },
      {
        id: 'aorta',
        name: 'Aorta',
        description: 'The aorta is the largest artery in the body. It carries oxygenated blood from the heart to the rest of the body through its many branches.',
        funFact: 'The aorta is about 30cm long and 2.5cm in diameter — roughly the size of a garden hose.',
        position: [0, 1.2, -0.02],
        scale: [0.02, 0.35, 0.02],
        shape: 'cylinder',
      },
      {
        id: 'left-carotid',
        name: 'Left Carotid Artery',
        description: 'The carotid arteries supply oxygenated blood to the brain and head. They run along each side of the neck.',
        funFact: 'The word "carotid" comes from the Greek word "karotides" meaning "to put to sleep" — pressing on it can cause unconsciousness.',
        position: [-0.06, 1.48, 0.02],
        scale: [0.015, 0.15, 0.015],
        shape: 'cylinder',
      },
      {
        id: 'right-carotid',
        name: 'Right Carotid Artery',
        description: 'The right carotid artery supplies oxygenated blood to the right side of the brain, face, and neck.',
        funFact: 'Blood travels through the carotid arteries at about 1.5 km/h on average.',
        position: [0.06, 1.48, 0.02],
        scale: [0.015, 0.15, 0.015],
        shape: 'cylinder',
      },
    ],
  },

  nervous: {
    id: 'nervous',
    name: 'Nervous System',
    icon: '🧠',
    color: '#fbbf24',
    description: 'The nervous system coordinates actions and sensory information by transmitting signals through a vast network of neurons.',
    parts: [
      {
        id: 'brain',
        name: 'Brain',
        description: 'The brain is the most complex organ in the body, containing approximately 86 billion neurons. It controls thoughts, memory, emotions, motor skills, and every process that regulates our body.',
        funFact: 'Your brain uses about 20% of your body\'s total energy despite being only 2% of your body weight.',
        position: [0, 1.65, 0],
        scale: [0.18, 0.15, 0.18],
        shape: 'sphere',
      },
      {
        id: 'spinal-cord',
        name: 'Spinal Cord',
        description: 'The spinal cord is a long, thin bundle of nervous tissue extending from the brainstem to the lower back. It serves as the main pathway for signals between the brain and the body.',
        funFact: 'The spinal cord is only about 45cm long and weighs about 35 grams.',
        position: [0, 0.95, -0.04],
        scale: [0.025, 0.7, 0.025],
        shape: 'cylinder',
      },
      {
        id: 'sciatic-left',
        name: 'Left Sciatic Nerve',
        description: 'The sciatic nerve is the longest and widest single nerve in the body. It runs from the lower back through the buttock and down the leg.',
        funFact: 'The sciatic nerve is about as thick as your thumb at its widest point.',
        position: [-0.1, 0.1, -0.03],
        scale: [0.015, 0.45, 0.015],
        shape: 'cylinder',
      },
      {
        id: 'sciatic-right',
        name: 'Right Sciatic Nerve',
        description: 'The sciatic nerve innervates almost the entire skin of the leg and the muscles of the back of the thigh, lower leg, and foot.',
        funFact: 'Sciatica affects up to 40% of people at some point in their lives.',
        position: [0.1, 0.1, -0.03],
        scale: [0.015, 0.45, 0.015],
        shape: 'cylinder',
      },
    ],
  },

  respiratory: {
    id: 'respiratory',
    name: 'Respiratory System',
    icon: '🫁',
    color: '#3b82f6',
    description: 'The respiratory system facilitates gas exchange, bringing oxygen into the body and expelling carbon dioxide.',
    parts: [
      {
        id: 'left-lung',
        name: 'Left Lung',
        description: 'The left lung is slightly smaller than the right to accommodate the heart. It has two lobes and is responsible for gas exchange on the left side.',
        funFact: 'Your lungs contain about 300 million alveoli, providing a surface area roughly the size of a tennis court.',
        position: [-0.13, 1.15, 0.02],
        scale: [0.12, 0.18, 0.1],
        shape: 'ellipsoid',
      },
      {
        id: 'right-lung',
        name: 'Right Lung',
        description: 'The right lung is larger and heavier than the left. It has three lobes (superior, middle, and inferior) and handles more air volume.',
        funFact: 'You breathe about 22,000 times a day and process about 10,000 liters of air.',
        position: [0.13, 1.15, 0.02],
        scale: [0.13, 0.18, 0.1],
        shape: 'ellipsoid',
      },
      {
        id: 'trachea',
        name: 'Trachea',
        description: 'The trachea (windpipe) is a tube about 10-12cm long that connects the larynx to the bronchi. It\'s reinforced by C-shaped cartilage rings.',
        funFact: 'The trachea has about 15-20 C-shaped cartilage rings that keep it open — the back is soft to allow the esophagus to expand when you swallow food.',
        position: [0, 1.38, 0.03],
        scale: [0.03, 0.12, 0.03],
        shape: 'cylinder',
      },
      {
        id: 'diaphragm',
        name: 'Diaphragm',
        description: 'The diaphragm is a dome-shaped muscle at the base of the chest cavity. It\'s the primary muscle of respiration, contracting and flattening during inhalation.',
        funFact: 'Hiccups are caused by involuntary spasms of the diaphragm muscle.',
        position: [0, 0.95, 0.02],
        scale: [0.28, 0.03, 0.16],
        shape: 'ellipsoid',
      },
    ],
  },

  digestive: {
    id: 'digestive',
    name: 'Digestive System',
    icon: '🫁',
    color: '#22c55e',
    description: 'The digestive system breaks down food into nutrients that the body uses for energy, growth, and cell repair.',
    parts: [
      {
        id: 'stomach',
        name: 'Stomach',
        description: 'The stomach is a muscular organ that receives food from the esophagus and begins the process of digestion using hydrochloric acid and enzymes.',
        funFact: 'Your stomach produces a new lining every three to four days to avoid digesting itself.',
        position: [-0.08, 0.88, 0.06],
        scale: [0.1, 0.1, 0.08],
        shape: 'ellipsoid',
      },
      {
        id: 'liver',
        name: 'Liver',
        description: 'The liver is the largest internal organ, weighing about 1.5 kg. It performs over 500 functions including detoxification, protein synthesis, and bile production.',
        funFact: 'The liver is the only organ that can completely regenerate itself — it can regrow from as little as 25% of its original size.',
        position: [0.1, 0.95, 0.06],
        scale: [0.16, 0.08, 0.1],
        shape: 'ellipsoid',
      },
      {
        id: 'intestines',
        name: 'Small & Large Intestine',
        description: 'The small intestine is about 6 meters long and absorbs most nutrients. The large intestine (1.5m) absorbs water and forms waste for elimination.',
        funFact: 'If stretched out, your small intestine would be about as long as a school bus.',
        position: [0, 0.65, 0.06],
        scale: [0.2, 0.2, 0.1],
        shape: 'ellipsoid',
      },
      {
        id: 'esophagus',
        name: 'Esophagus',
        description: 'The esophagus is a muscular tube about 25cm long that transports food from the mouth to the stomach through rhythmic muscle contractions called peristalsis.',
        funFact: 'Peristalsis is so strong that you can eat and drink while upside down.',
        position: [0, 1.35, -0.01],
        scale: [0.02, 0.15, 0.02],
        shape: 'cylinder',
      },
    ],
  },
};

export const getSystemColor = (systemId) => {
  return BODY_SYSTEMS[systemId]?.color || '#ffffff';
};

export const getPartById = (partId) => {
  for (const system of Object.values(BODY_SYSTEMS)) {
    const part = system.parts.find((p) => p.id === partId);
    if (part) return { ...part, system };
  }
  return null;
};

export const getAllParts = () => {
  const parts = [];
  for (const system of Object.values(BODY_SYSTEMS)) {
    for (const part of system.parts) {
      parts.push({ ...part, systemId: system.id, systemName: system.name, systemColor: system.color });
    }
  }
  return parts;
};
