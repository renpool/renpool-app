export function shortAccount(account?: string): string {
  return account == null
    ? ''
    : `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
}
