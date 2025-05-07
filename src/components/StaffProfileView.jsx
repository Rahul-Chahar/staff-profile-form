import { useLocation } from 'react-router-dom';
import DefaultProfileImage from './DefaultProfileImage';
import './StaffProfileView.css';

const fontAwesomeLink = document.createElement('link');
fontAwesomeLink.rel = 'stylesheet';
fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
document.head.appendChild(fontAwesomeLink);

const StaffProfileView = () => {
  const location = useLocation();
  const profileData = location.state || {};

  return (
    <div className="staff-profile-view">
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-image-container">
            <DefaultProfileImage className="profile-image" />
            <h2 className="profile-name">{profileData.firstName}</h2>
            <div className="social-icons">
            <span className="social-icon facebook" style={{ color: '#1877f2' }}><i className="fab fa-facebook-f"></i></span>
              <span className="social-icon linkedin" style={{ color: '#0077b5' }}><i className="fab fa-linkedin-in"></i></span>
              <span className="social-icon skype" style={{ color: '#00aff0' }}><i className="fab fa-skype"></i></span>
              <span className="social-icon email" style={{ color: '#d93025' }}><i className="fas fa-envelope"></i></span>
            </div>
          </div>
          
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon email"><i className="fas fa-envelope"></i></span>
              <span className="contact-text">{profileData.email}</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon phone"><i className="fas fa-phone"></i></span>
              <span className="contact-text">{profileData.phone}</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon education"><i className="fas fa-graduation-cap"></i></span>
              <span className="contact-text">Oxford University</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon position"><i className="fas fa-user"></i></span>
              <span className="contact-text">HR Associate</span>
            </div>
          </div>
          
          <div className="direct-manager">
            <h3>Direct manager: </h3>
            <div className="manager-avatar"></div>
          </div>
        </div>

        <div className="information-panels">
          <div className="info-panel">
            <h2 className="panel-title">General information</h2>
            <div className="info-grid">
              <div className="info-row">
                <div className="info-label">Staff code</div>
                <div className="info-value">{profileData.staffCode}</div>
              </div>
              <div className="info-row">
                <div className="info-label">Staff name</div>
                <div className="info-value">{profileData.firstName}</div>
              </div>
              <div className="info-row">
                <div className="info-label">Gender</div>
                <div className="info-value">{profileData.gender}</div>
              </div>
              <div className="info-row">
                <div className="info-label">Birthday</div>
                <div className="info-value">{profileData.birthday}</div>
              </div>
              <div className="info-row">
                <div className="info-label">Phone</div>
                <div className="info-value">{profileData.phone}</div>
              </div>
              <div className="info-row">
                <div className="info-label">Workplace</div>
                <div className="info-value">{profileData.workplace}</div>
              </div>
              <div className="info-row">
                <div className="info-label">Status</div>
                <div className="info-value">{profileData.status}</div>
              </div>
              <div className="info-row">
                <div className="info-label">Job position</div>
                <div className="info-value">{profileData.jobPosition}</div>
              </div>
              <div className="info-row">
                <div className="info-label">Academic level</div>
                <div className="info-value">{profileData.academicLevel}</div>
              </div>
              <div className="info-row">
                <div className="info-label">Hourly Rate</div>
                <div className="info-value">{profileData.hourlyRate}</div>
              </div>
              <div className="info-row">
                <div className="info-label">Religion</div>
                <div className="info-value">{profileData.religion}</div>
              </div>
              <div className="info-row">
                <div className="info-label">Nation</div>
                <div className="info-value">{profileData.nation}</div>
              </div>
              <div className="info-row">
                <div className="info-label">Marital status</div>
                <div className="info-value">{profileData.maritalStatus}</div>
              </div>
            </div>
          </div>

          <div className="info-panel">
            <h2 className="panel-title">Related information</h2>
            <div className="info-grid">
              <div className="info-row">
                <div className="info-label">Citizen identification</div>
                <div className="info-value">{profileData.citizenIdentification}</div>
              </div>
              <div className="info-row">
                <div className="info-label">Date of issue</div>
                <div className="info-value">{profileData.dateOfIssue}</div>
              </div>
              <div className="info-row">
                <div className="info-label">Place of birth</div>
                <div className="info-value">{profileData.placeOfBirth}</div>
              </div>
              <div className="info-row">
                <div className="info-label">Current address</div>
                <div className="info-value">{profileData.currentAddress}</div>
              </div>
              <div className="info-row">
                <div className="info-label">Bank account number</div>
                <div className="info-value">{profileData.bankAccountNumber}</div>
              </div>
              <div className="info-row">
                <div className="info-label">Bank account name</div>
                <div className="info-value">{profileData.bankAccountName}</div>
              </div>
              <div className="info-row">
                <div className="info-label">Bank name</div>
                <div className="info-value">{profileData.bankName}</div>
              </div>
              <div className="info-row">
                <div className="info-label">Personal tax code</div>
                <div className="info-value">{profileData.personalTaxCode}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffProfileView;