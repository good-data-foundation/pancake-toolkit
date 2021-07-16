import React from "react";
import Button from "../../../components/Button/Button";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  infoLink?: string;
}

const UserBlock: React.FC<Props> = ({ account, login, logout, infoLink }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account, infoLink);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div>
      {account ? (
        <Button
          scale="sm"
          variant="wallet"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          scale="sm"
          variant="wallet"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect Wallet
        </Button>
      )}
    </div>
  );
};

export default React.memo(UserBlock, (prevProps, nextProps) => prevProps.account === nextProps.account);
