import React, { useState } from 'react';
import cx from 'classnames';
import './tab.scss';

function Tab(props) {
  const [activeTab, setActiveTab] = useState(props.activeTab);
  const { tabElements, onTabClick } = props;

  return (
    <div className="bg-white shadow-sm flex HotelDescriptionTab">
      {
                tabElements.map((element) => (
                  <p
                    className={cx(
                      'p-4 cursor-pointer text-gray-500 hover:bg-gray-300',
                      {
                        'Element--active': activeTab === element.value,
                      },
                    )}
                    onClick={() => {
                      onTabClick(element.value);
                      setActiveTab(element.value);
                    }}
                  >
                    {element.name}
                  </p>
                ))
            }
    </div>
  );
}

export default Tab;
