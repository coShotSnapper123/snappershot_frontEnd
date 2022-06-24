import { Modal, Container, Row, Col, Button, Badge } from "react-bootstrap";
import './ImageModal.css';

export default function ImageModal(props) {

    return (
        <>
            <Modal
                show={props.showImageModal}
                onHide={props.hideImageModal}
                dialogClassName="modal-90w image_popup"
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
                                            <img className="img-fluid"  src="./assets/icons/like.png"/>
                                        </Button>
                                    </Col>
                                    <Col md={4}>
                                        <Button variant="secondary" className="mybtn plus">
                                            <img className="img-fluid"  src="./assets/icons/add_big.png"/>
                                        </Button>
                                    </Col>
                                    <Col md={4}>
                                        <Button variant="secondary" className="mybtn">
                                            <img className="img-fluid"  src="./assets/icons/share.png"/>
                                        </Button>
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Button className="btn download-btn">
                                        <img className="img-fluid"  src="./assets/icons/dwonload_icon.png"/> Download
                                    </Button>
                                </Row>
                                <Row className="mt-2">
                                    <Button className="btn edit-btn">
                                        <img className="img-fluid"  src="./assets/icons/Edit.png"/> Edit Image
                                    </Button>
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
                                        <Button className="btn download-btn w-100">Follow</Button>
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
