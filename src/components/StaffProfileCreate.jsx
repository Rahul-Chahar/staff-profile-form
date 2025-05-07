import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StaffProfileCreate.css';

import DefaultProfileImage from '../components/DefaultProfileImage';

const StaffProfileCreate = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    staffCode: '',
    firstName: 'Ananya',
    lastName: 'Sharma',
    gender: 'None selected',
    birthday: '',
    email: 'talent@cybercurate.com',
    phone: '',
    workplace: 'None selected',
    status: 'Working',
    jobPosition: 'None selected',
    directManager: 'None selected',
    role: 'Employee',
    academicLevel: 'Not required',
    hourlyRate: '0.00',
    defaultLanguage: 'System Default',
    direction: 'System Default',
    emailSignature: '',
    otherInformation: '',
    twilioPhoneNumber: '',
    isTwilioWhatsAppEnabled: 'None selected',
    password: '',
    // Related information tab
    domicile: '',
    maritalStatus: 'None selected',
    currentAddress: '',
    nation: '',
    placeOfBirth: '',
    religion: '',
    citizenIdentification: '',
    dateOfIssue: '',
    placeOfIssue: '',
    resident: '',
    bankAccountNumber: '',
    bankAccountName: '',
    bankName: '',
    personalTaxCode: '',
    epfNo: '',
    socialSecurityNo: '',
    facebook: '',
    linkedin: '',
    skype: ''
  });
  
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
   
    navigate('/view', { state: { 
      ...formData
      // staffCode: '0001',
      // gender: 'Female',
      // birthday: '12th July 1994',
      // phone: '+919307059006',
      // workplace: 'Bengaluru Office',
      // status: 'Full-time',
      // jobPosition: 'Job Position',
      // academicLevel: 'B Sc. Graduate',
      // hourlyRate: '₹120.00',
      // religion: 'Hindu',
      // nation: 'India',
      // maritalStatus: 'Married',
      // citizenIdentification: 'Aadhar Card',
      // dateOfIssue: '03rd May 2012',
      // placeOfBirth: 'Mumbai',
      // currentAddress: '1/2, Half Road, Fullfield, Wonder City, Bengaluru',
      // bankAccountNumber: '234987564212',
      // bankAccountName: 'Nallurhalli Branch',
      // bankName: 'State Bank of India',
      // personalTaxCode: 'ABCD1234'
    }});
  };
  
  const toggleTwoFactor = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
  };

  return (
    <div className="staff-profile-create">
      <div className="modal-header">
        <h2>Staff profile Create</h2>
        <button className="close-button">×</button>
      </div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </button>
        <button 
          className={`tab ${activeTab === 'related' ? 'active' : ''}`}
          onClick={() => setActiveTab('related')}
        >
          Related information
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        {activeTab === 'profile' ? (
          <div className="profile-tab">
            <div className="two-factor">
              <input 
                type="checkbox" 
                id="twoFactor" 
                checked={twoFactorEnabled}
                onChange={toggleTwoFactor}
              />
              <label htmlFor="twoFactor">
                <span className="info-icon">i</span> Enable Email Two Factor Authentication
              </label>
            </div>
            
            <div className="profile-image">
              <DefaultProfileImage />
            </div>
            
            <div className="form-row">
              <div className="form-field required">
                <label>Staff code</label>
                <input 
                  type="text" 
                  name="staffCode"
                  value={formData.staffCode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-field required">
                <label>First name</label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field required">
                <label>Last name</label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-field">
                <label>Gender</label>
                <select 
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option>None selected</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-field">
                <label>Birthday</label>
                <div className="date-input">
                  <input 
                    type="text" 
                    name="birthday"
                    value={formData.birthday}
                    onChange={handleChange}
                  />
                  <button type="button" className="calendar-button">
                    <span className="calendar-icon">📅</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-field required">
                <label>Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label>Phone</label>
                <input 
                  type="text" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-field">
                <label>Workplace</label>
                <select 
                  name="workplace"
                  value={formData.workplace}
                  onChange={handleChange}
                >
                  <option>None selected</option>
                  <option>Bengaluru Office</option>
                  <option>Mumbai Office</option>
                  <option>Delhi Office</option>
                </select>
              </div>
              <div className="form-field required">
                <label>Status</label>
                <select 
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                >
                  <option>Working</option>
                  <option>On Leave</option>
                  <option>Full-Time</option>
                </select>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-field required">
                <label>Job position</label>
                <select 
                  name="jobPosition"
                  value={formData.jobPosition}
                  onChange={handleChange}
                  required
                >
                  <option>None selected</option>
                  <option>HR Associate</option>
                  <option>Software Developer</option>
                  <option>Project Manager</option>
                </select>
              </div>
              <div className="form-field">
                <label>Direct manager</label>
                <select 
                  name="directManager"
                  value={formData.directManager}
                  onChange={handleChange}
                >
                  <option>None selected</option>
                  <option>John Doe</option>
                  <option>Jane Smith</option>
                </select>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-field">
                <label>Role</label>
                <select 
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option>Employee</option>
                  <option>Manager</option>
                  <option>Admin</option>
                </select>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-field">
                <label>Academic level</label>
                <select 
                  name="academicLevel"
                  value={formData.academicLevel}
                  onChange={handleChange}
                >
                  <option>Not required</option>
                  <option>High School</option>
                  <option>Bachelor's</option>
                  <option>Master's</option>
                  <option>PhD</option>
                </select>
              </div>
              <div className="form-field">
                <label>Hourly Rate</label>
                <div className="currency-input">
                  <input 
                    type="text" 
                    name="hourlyRate"
                    value={formData.hourlyRate}
                    onChange={handleChange}
                  />
                  <span className="currency-symbol">₹</span>
                </div>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-field">
                <label>Default Language</label>
                <select 
                  name="defaultLanguage"
                  value={formData.defaultLanguage}
                  onChange={handleChange}
                >
                  <option>System Default</option>
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Tamil</option>
                </select>
              </div>
              <div className="form-field">
                <label>Direction</label>
                <select 
                  name="direction"
                  value={formData.direction}
                  onChange={handleChange}
                >
                  <option>System Default</option>
                  <option>LTR</option>
                  <option>RTL</option>
                </select>
              </div>
            </div>
          </div>
        ) : (
          <div className="related-tab">
            <div className="form-row">
              <div className="form-field">
                <label>Domicile</label>
                <input 
                  type="text" 
                  name="domicile"
                  value={formData.domicile}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label>Marital status</label>
                <select 
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                >
                  <option>None selected</option>
                  <option>Single</option>
                  <option>Married</option>
                  <option>Divorced</option>
                </select>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-field">
                <label>Current address</label>
                <input 
                  type="text" 
                  name="currentAddress"
                  value={formData.currentAddress}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label>Nation</label>
                <input 
                  type="text" 
                  name="nation"
                  value={formData.nation}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-field">
                <label>Place of birth</label>
                <input 
                  type="text" 
                  name="placeOfBirth"
                  value={formData.placeOfBirth}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label>Religion</label>
                <input 
                  type="text" 
                  name="religion"
                  value={formData.religion}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-field">
                <label>Citizen identification</label>
                <input 
                  type="text" 
                  name="citizenIdentification"
                  value={formData.citizenIdentification}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label>Date of issue</label>
                <div className="date-input">
                  <input 
                    type="text" 
                    name="dateOfIssue"
                    value={formData.dateOfIssue}
                    onChange={handleChange}
                  />
                  <button type="button" className="calendar-button">
                    <span className="calendar-icon">📅</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-field">
                <label>Place of issue</label>
                <input 
                  type="text" 
                  name="placeOfIssue"
                  value={formData.placeOfIssue}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label>Resident</label>
                <input 
                  type="text" 
                  name="resident"
                  value={formData.resident}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-field">
                <label>Bank account number</label>
                <input 
                  type="text" 
                  name="bankAccountNumber"
                  value={formData.bankAccountNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label>Bank account name</label>
                <input 
                  type="text" 
                  name="bankAccountName"
                  value={formData.bankAccountName}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-field">
                <label>Bank name</label>
                <input 
                  type="text" 
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label>Personal tax code</label>
                <input 
                  type="text" 
                  name="personalTaxCode"
                  value={formData.personalTaxCode}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-field">
                <label>EPF No</label>
                <input 
                  type="text" 
                  name="epfNo"
                  value={formData.epfNo}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label>Social Security No</label>
                <input 
                  type="text" 
                  name="socialSecurityNo"
                  value={formData.socialSecurityNo}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-field">
                <label><span className="facebook-icon">f</span> Facebook</label>
                <input 
                  type="text" 
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label><span className="linkedin-icon">in</span> LinkedIn</label>
                <input 
                  type="text" 
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-field">
                <label><span className="skype-icon">S</span> Skype</label>
                <input 
                  type="text" 
                  name="skype"
                  value={formData.skype}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'profile' && (
          <>
            <div className="form-row">
              <div className="form-field">
                <label><span className="info-icon">i</span> Email Signature</label>
                <textarea 
                  name="emailSignature"
                  value={formData.emailSignature}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-field">
                <label>Other information</label>
                <textarea 
                  name="otherInformation"
                  value={formData.otherInformation}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-field">
                <label><span className="twilio-icon">T</span> Twilio Phone Number</label>
                <input 
                  type="text" 
                  name="twilioPhoneNumber"
                  value={formData.twilioPhoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-field checkbox-field">
                <label><span className="twilio-icon">T</span> Is twilio number whats app enabled</label>
                <select 
                  name="isTwilioWhatsAppEnabled"
                  value={formData.isTwilioWhatsAppEnabled}
                  onChange={handleChange}
                >
                  <option>None selected</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-field required">
                <label>Password</label>
                <div className="password-input">
                  <input 
                    type="password" 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button type="button" className="password-visibility">
                    <span className="eye-icon">👁️</span>
                  </button>
                  <button type="button" className="password-reset">
                    <span className="reset-icon">🔄</span>
                  </button>
                </div>
                <div className="password-note">
                  Note: if you populate this field, password will be changed on this member.
                </div>
              </div>
            </div>
          </>
        )}
        
        <div className="form-actions">
          <button type="button" className="close-btn">Close</button>
          <button type="submit" className="save-btn">Save</button>
        </div>
      </form>
    </div>
  );
};

export default StaffProfileCreate;