export default function SubgraphPage() {
  // TODO: Fetch data from The Graph API
  const transfers: any[] = [];
  const roleGranteds: any[] = [];
  const roleRevokeds: any[] = [];
  const roleAdminChangeds: any[] = [];
  const approvals: any[] = [];

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const formatTimestamp = (timestamp: string) => {
    return new Date(parseInt(timestamp) * 1000).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="hero min-h-[300px] bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Subgraph Data
            </h1>
            <p className="text-xl opacity-80">
              Live blockchain data indexed by The Graph
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-8 md:px-12 max-w-7xl space-y-12">
          {/* Transfers Section */}
          <div className="card bg-base-200 shadow-xl border border-base-300">
            <div className="card-body p-8">
              <h2 className="card-title text-3xl mb-6">💸 Transfers</h2>
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th>From</th>
                      <th>To</th>
                      <th>Value</th>
                      <th>Block</th>
                      <th>Transaction</th>
                      <th>Timestamp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transfers.map((transfer) => (
                      <tr key={transfer.id}>
                        <td className="font-mono text-sm">
                          {formatAddress(transfer.from)}
                        </td>
                        <td className="font-mono text-sm">
                          {formatAddress(transfer.to)}
                        </td>
                        <td className="font-semibold">
                          {(parseInt(transfer.value) / 100).toFixed(2)} BTK
                        </td>
                        <td>{transfer.blockNumber}</td>
                        <td className="font-mono text-sm">
                          {formatAddress(transfer.transactionHash)}
                        </td>
                        <td className="text-sm opacity-70">
                          {formatTimestamp(transfer.blockTimestamp)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {transfers.length === 0 && (
                <div className="text-center py-8 opacity-60">
                  <p>No transfers found. Connect a subgraph to see data.</p>
                </div>
              )}
            </div>
          </div>

          {/* Role Granted Section */}
          <div className="card bg-base-200 shadow-xl border border-base-300">
            <div className="card-body p-8">
              <h2 className="card-title text-3xl mb-6">✨ Roles Granted</h2>
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th>Role</th>
                      <th>Account</th>
                      <th>Sender</th>
                      <th>Block</th>
                      <th>Transaction</th>
                      <th>Timestamp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roleGranteds.map((event) => (
                      <tr key={event.id}>
                        <td className="font-mono text-sm">{event.role}</td>
                        <td className="font-mono text-sm">
                          {formatAddress(event.account)}
                        </td>
                        <td className="font-mono text-sm">
                          {formatAddress(event.sender)}
                        </td>
                        <td>{event.blockNumber}</td>
                        <td className="font-mono text-sm">
                          {formatAddress(event.transactionHash)}
                        </td>
                        <td className="text-sm opacity-70">
                          {formatTimestamp(event.blockTimestamp)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {roleGranteds.length === 0 && (
                <div className="text-center py-8 opacity-60">
                  <p>No roles granted found. Connect a subgraph to see data.</p>
                </div>
              )}
            </div>
          </div>

          {/* Role Revoked Section */}
          <div className="card bg-base-200 shadow-xl border border-base-300">
            <div className="card-body p-8">
              <h2 className="card-title text-3xl mb-6">🚫 Roles Revoked</h2>
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th>Role</th>
                      <th>Account</th>
                      <th>Sender</th>
                      <th>Block</th>
                      <th>Transaction</th>
                      <th>Timestamp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roleRevokeds.map((event) => (
                      <tr key={event.id}>
                        <td className="font-mono text-sm">{event.role}</td>
                        <td className="font-mono text-sm">
                          {formatAddress(event.account)}
                        </td>
                        <td className="font-mono text-sm">
                          {formatAddress(event.sender)}
                        </td>
                        <td>{event.blockNumber}</td>
                        <td className="font-mono text-sm">
                          {formatAddress(event.transactionHash)}
                        </td>
                        <td className="text-sm opacity-70">
                          {formatTimestamp(event.blockTimestamp)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {roleRevokeds.length === 0 && (
                <div className="text-center py-8 opacity-60">
                  <p>No roles revoked found. Connect a subgraph to see data.</p>
                </div>
              )}
            </div>
          </div>

          {/* Approvals Section */}
          <div className="card bg-base-200 shadow-xl border border-base-300">
            <div className="card-body p-8">
              <h2 className="card-title text-3xl mb-6">✅ Approvals</h2>
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th>Owner</th>
                      <th>Spender</th>
                      <th>Value</th>
                      <th>Transaction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {approvals.map((approval) => (
                      <tr key={approval.id}>
                        <td className="font-mono text-sm">
                          {formatAddress(approval.owner)}
                        </td>
                        <td className="font-mono text-sm">
                          {formatAddress(approval.spender)}
                        </td>
                        <td className="font-semibold">
                          {(parseInt(approval.value) / 100).toFixed(2)} BTK
                        </td>
                        <td className="font-mono text-sm">
                          {formatAddress(approval.transactionHash)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {approvals.length === 0 && (
                <div className="text-center py-8 opacity-60">
                  <p>No approvals found. Connect a subgraph to see data.</p>
                </div>
              )}
            </div>
          </div>

          {/* Role Admin Changed Section */}
          <div className="card bg-base-200 shadow-xl border border-base-300">
            <div className="card-body p-8">
              <h2 className="card-title text-3xl mb-6">
                🔐 Role Admin Changes
              </h2>
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th>Role</th>
                      <th>Previous Admin</th>
                      <th>New Admin</th>
                      <th>Block</th>
                      <th>Transaction</th>
                      <th>Timestamp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roleAdminChangeds.map((event) => (
                      <tr key={event.id}>
                        <td className="font-mono text-sm">{event.role}</td>
                        <td className="font-mono text-sm">
                          {event.previousAdminRole}
                        </td>
                        <td className="font-mono text-sm">
                          {event.newAdminRole}
                        </td>
                        <td>{event.blockNumber}</td>
                        <td className="font-mono text-sm">
                          {formatAddress(event.transactionHash)}
                        </td>
                        <td className="text-sm opacity-70">
                          {formatTimestamp(event.blockTimestamp)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {roleAdminChangeds.length === 0 && (
                <div className="text-center py-8 opacity-60">
                  <p>
                    No role admin changes found. Connect a subgraph to see data.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
