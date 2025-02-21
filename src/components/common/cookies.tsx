import { useEffect, useState } from "react"

const Cookies = () => {
  const [cookies, setCookies] = useState(window.localStorage.getItem('cookies') || '')
  useEffect(() => {
    const cookies = localStorage.getItem('cookies')
    setCookies(cookies as string)
  }, [])
  function handleCookies(action: string){
    localStorage.setItem('cookies', action)
    window.location.reload()
  }
  
  if(cookies === 'accept' || cookies === 'decline') return <></>;
  return (
    <div className="relative z-30" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" aria-hidden="true">
        <div className="fixed inset-0 z-30 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className='bg-white text-deepBlue px-7 py-10'>
                <h2 className="text-[26px] font-bold mb-3">We use cookies 🍪</h2>
                <div>
                  We use cookies to ensure you have the best browsing experience on our website.
                  By using our site, you acknowledge that you have read and understood our <a href='/policy' className="text-[#0fcc7c] font-bold">Cookie Policy</a> & <a href='/policy' className="text-[#0fcc7c] font-bold">Privacy Policy</a>
                </div>
                <div className='flex gap-5 mt-7'>
                  <div className="py-2 px-5 font-semibold rounded-[10px] cursor-pointer border border-[#0fcc7c] text-[#0fcc7c] hover:text-white hover:bg-[#0fcc7c]" onClick={() => handleCookies('accept')}>Accept</div>
                  <div className="py-2 px-5 font-semibold rounded-[10px] cursor-pointer border border-red-400 text-red-400 hover:text-white hover:bg-red-400" onClick={() => handleCookies('decline')}>Decline</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cookies