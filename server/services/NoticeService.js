import*as noticeRepository from "../repository/NoticeRepository"

export const findAll = () => {
    return noticeRepository.findAll();
}

export const create = (noticeDto) => {
    return noticeRepository.create(noticeDto);
}
