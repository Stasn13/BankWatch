import Navigation from './Navigation'

function Main() {
  /**
   * BACKLOG
   * TODO:
   * - containers?
   * - add score to discover
   * - improve mobile experience
   * - check other wallets (null states, empty components, users not attended to zeroLend)
   * - implement loaders and error handling
   * - improve BadgesCard heights (button jumps)
   * 
   * - add user guide and onboarding dasboard
   * - write docs/description
   * - prepare release
   * - write post in linkedIn
   * - add new badges, enhance svg's
   * - implement "Coming soon" feaatures
   * 
   * Done:
   * - improve layout, fix connectbtn
   * - connect score attestations
   * - finish busines logic getting attestattions
   */

  return (
      <div className="flex px-4 h-[100vh] overflow-hidden">
        <Navigation />
        <main className="flex flex-row gap-2 flex-wrap px-8 overflow-y-auto pt-4">
          
          <footer>powered by Verax (2024)</footer>
        </main>
      </div>
  )
}

export default Main
