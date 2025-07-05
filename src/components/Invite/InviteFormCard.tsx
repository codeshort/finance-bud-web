import { useEffect, useRef, useState } from 'react';
import styles from '../../css/Invite/InviteFormCard.module.css';
import { InputTypes } from '../../types/components/Input/InputTypes';
import { TextVariant } from '../../types/components/Text/TextTypes';
import Input from '../Input/Input';
import Text from '../Text/Text';
import Button from '../Button/Button';
import { ButtonVariant } from '../../types/components/Button/ButtonTypes';

export default function InviteFormCard() {
  const [selectedInvites, setSelectedInvites] = useState<string[]>([]);
  const [currentTypedEmail, setCurrentTypedEmail] = useState<string>('');
  const selectionsContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (selectionsContainerRef.current) {
      selectionsContainerRef.current.scrollTo({
        top: selectionsContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [selectedInvites]);
  function handleEmailInputKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>,
  ) {
    if (event.key === 'Enter') {
      setSelectedInvites((prev) => [...prev, currentTypedEmail]);
      setCurrentTypedEmail('');
    }
  }

  function handleEmailInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCurrentTypedEmail(event.target.value);
  }

  function handleSendInvite() {
    // Handle send invite logic
  }

  function handleImportContacts() {
    // Handle import contacts logic
  }

  // Header section
  function renderHeader() {
    return (
      <div className={styles['invite-form-heading']}>
        <Text variant={TextVariant.Heading}>Invite Friends</Text>
        <Text variant={TextVariant.Body}>Invite your friends to connect</Text>
      </div>
    );
  }

  // Email input section
  function renderEmailInput() {
    return (
      <div className={styles['invite-form-fields']}>
        <Input
          placeholder="Enter Email Address"
          type={InputTypes.EMAIL}
          onKeyDown={handleEmailInputKeyDown}
          onChange={handleEmailInputChange}
          value={currentTypedEmail}
        />
      </div>
    );
  }

  // Invite list section
  function renderInviteList() {
    return (
      <div>
        <Text variant={TextVariant.SubHeading}>
          {selectedInvites.length > 0
            ? 'Added to list'
            : 'Type atleast one friend!'}
        </Text>
        {selectedInvites.length > 0 && (
          <div
            className={styles['invite-form-selections-container']}
            ref={selectionsContainerRef}
          >
            {selectedInvites.map((inviteSelection) => (
              <div
                className={styles['invite-form-selection']}
                key={inviteSelection}
              >
                <i className="fa fa-check" aria-hidden="true"></i>
                <Text variant={TextVariant.Body}>{inviteSelection}</Text>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Actions section
  function renderActions() {
    return (
      <div className={styles['invite-form-actions']}>
        <Button
          variant={ButtonVariant.PRIMARY}
          onClick={handleSendInvite}
          style={{ width: '100%' }}
          disabled={selectedInvites.length === 0}
        >
          Send Invite
        </Button>
        <hr className={styles['invite-form-divider']} />
        <Button
          variant={ButtonVariant.SECONDARY}
          onClick={handleImportContacts}
          style={{ width: '100%' }}
        >
          Import Contacts
        </Button>
      </div>
    );
  }

  return (
    <div className={styles['invite-form-container']}>
      {renderHeader()}
      {renderEmailInput()}
      {renderInviteList()}
      {renderActions()}
    </div>
  );
}
