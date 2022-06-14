import { Modal, Container, Row, Col, Button, Badge } from "react-bootstrap";
import './ImageModal.css';

export default function ImageModal(props) {

    return (
        <>
            <Modal
                show={props.showImageModal}
                onHide={props.hideImageModal}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                size="xl"
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col sm={12} xs={12} md={8} className="img-div">
                                <img src={props.imageModalPath} className='img-fluid' />
                            </Col>
                            <Col xs={12} md={4}>
                                <Row>
                                    <Col md={4}>
                                        <Button variant="secondary" className="mybtn">
                                            <Badge bg="secondary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                </svg>
                                            </Badge>
                                        </Button>
                                    </Col>
                                    <Col md={4}>
                                        <Button variant="secondary" className="mybtn plus">
                                            <Badge bg="secondary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
                                            </Badge>
                                        </Button>
                                    </Col>
                                    <Col md={4}>
                                        <Button variant="secondary" className="mybtn">
                                            <Badge bg="secondary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                                                    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                                </svg>
                                            </Badge>
                                        </Button>
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Button className="btn download-btn"><i class="fa fa-download"></i> Download</Button>
                                </Row>
                                <Row className="mt-3">
                                    <Button className="btn edit-btn"><i class="fa fa-edit"></i> Edit Image</Button>
                                </Row>
                                <Row className="mt-4">
                                    <h5>Picture Name</h5>
                                    <Col md={6} className="common-p heading-p">
                                        <p>Image Type</p>
                                        <p>Resulution</p>
                                        <p>Size</p>
                                        <p>DPI</p>
                                    </Col>
                                    <Col md={6} className="text-right common-p">
                                        <p>JPG</p>
                                        <p>4124*3124</p>
                                        <p>8.69 MB</p>
                                        <p>300</p>
                                    </Col>
                                </Row>
                                <Row className="mt-3 heading-p">
                                    <p className="mb-1">Featured in</p>
                                    <h6>Editorial, Arts & Culture</h6>
                                </Row>
                                <Row className="mt-3 heading-p">
                                    <p className="mb-1">Published on January 7,2022</p>
                                    <p className="mb-1">Free to use under Snappershot License</p>
                                </Row>
                                <Row className="mt-3">
                                    <Col md={6} className="common-p heading-p img-area">
                                        <div>
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp" className="img-fluid rounded-circle border border-dark border-3" style={{ width: '50px', marginRight: '8px' }} />
                                        </div>
                                        <div>
                                            <h6>John Dow</h6>
                                            <p>8219 followers</p>
                                        </div>
                                    </Col>
                                    <Col md={6} className="text-right">
                                        <Button className="btn download-btn">Follow</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className="likes-sec mt-3">
                                <div>
                                    <p>Likes</p>
                                    <h6>42,11,589</h6>
                                </div>
                                <div>
                                    <p>Views</p>
                                    <h6>42,11,589</h6>
                                </div>
                                <div>
                                    <p>Downloads</p>
                                    <h6>42,11,589</h6>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <h5 className="font-weight-bold mb-4">Similar Images</h5>
                            <Col md={4}>
                                <div className="img1 mb-4 rounded">
                                    <img src="../../../assets/poplar_image/img1.png" />
                                </div>
                                <div className="img3 mb-4 rounded">
                                    <img src="../../../assets/poplar_image/img1.png" />
                                </div>
                                <div className="img2 mb-4 rounded">
                                    <img src="../../../assets/poplar_image/img1.png" />
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="img2 mb-4 rounded">
                                    <img src="../../../assets/poplar_image/img1.png" />
                                </div>
                                <div className="img2 mb-4 rounded">
                                    <img src="../../../assets/poplar_image/img1.png" />
                                </div>
                                <div className="img2 mb-4 rounded">
                                    <img src="../../../assets/poplar_image/img1.png" />
                                </div>
                                <div className="img1 mb-4 rounded">
                                    <img src="../../../assets/poplar_image/img1.png" />
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="img3 mb-4 rounded">
                                    <img src="../../../assets/poplar_image/img1.png" />
                                </div>
                                <div className="img1 mb-4 rounded">
                                    <img src="../../../assets/poplar_image/img1.png" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
}
