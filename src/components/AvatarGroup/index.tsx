import React from 'react'

function AvatarGroup() {
  return (
    <div className="avatar-group -space-x-6 rtl:space-x-reverse">
    <div className="avatar">
      <div className="w-11">
        <img src="/person/person2.jpeg" />
      </div>
    </div>
    <div className="avatar">
      <div className="w-11">
        <img src="/person/person3.jpeg" />
      </div>
    </div>
    <div className="avatar">
      <div className="w-11">
        <img src="/person/person4.jpeg" />
      </div>
    </div>
    <div className="avatar">
      <div className="w-11">
        <img src="/person/person5.jpeg" />
      </div>
    </div>
  </div>
  )
}

export default AvatarGroup