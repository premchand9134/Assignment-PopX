function AccountSettings() {
  return (
    <div className="min-h-screen bg-[#F7F8F9] ">
      <div>
         <div className="mb-2 px-6 py-6 bg-[#ffffff]">
          <h1 className="text-xl font-semibold text-[#1D2226]">Account Settings</h1>
        </div>
      </div>

      <div className=" bg-[#F7F8F9]">
        {/* Header */}
       

        {/* Profile Section */}
        <div className=" rounded-lg p-4 mb-2 ">
          <div className="flex items-center space-x-4">
            {/* Profile Image */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Profile Info */}
            <div>
              <h2 className="font-semibold text-gray-800 text-lg">Deepika roy</h2>
              <p className="text-[#1D2226] text-sm">deepu@Gmail.Com</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className=" rounded-lg p-4 ">
          <p className="text-[#1D2226] text-sm leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;