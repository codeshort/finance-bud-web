import CircularButton from './CircularButton';

export default function CircularButtonExample() {
  const handleClick = (message: string) => {
    console.log(message);
  };

  return (
    <div style={{ padding: '20px', display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
      {/* Small circular buttons */}
      <CircularButton
        size="small"
        variant="primary"
        onClick={() => handleClick('Small primary clicked!')}
      >
        +
      </CircularButton>
      
      <CircularButton
        size="small"
        variant="secondary"
        onClick={() => handleClick('Small secondary clicked!')}
      >
        ×
      </CircularButton>

      {/* Medium circular buttons */}
      <CircularButton
        size="medium"
        variant="primary"
        onClick={() => handleClick('Medium primary clicked!')}
      >
        +
      </CircularButton>
      
      <CircularButton
        size="medium"
        variant="success"
        onClick={() => handleClick('Medium success clicked!')}
      >
        ✓
      </CircularButton>
      
      <CircularButton
        size="medium"
        variant="danger"
        onClick={() => handleClick('Medium danger clicked!')}
      >
        ✕
      </CircularButton>
      
      <CircularButton
        size="medium"
        variant="warning"
        onClick={() => handleClick('Medium warning clicked!')}
      >
        !
      </CircularButton>

      {/* Large circular buttons */}
      <CircularButton
        size="large"
        variant="primary"
        onClick={() => handleClick('Large primary clicked!')}
      >
        +
      </CircularButton>
      
      <CircularButton
        size="large"
        variant="secondary"
        onClick={() => handleClick('Large secondary clicked!')}
      >
        ×
      </CircularButton>

      {/* Disabled button */}
      <CircularButton
        size="medium"
        variant="primary"
        disabled
        onClick={() => handleClick('This should not work')}
      >
        🚫
      </CircularButton>
    </div>
  );
} 