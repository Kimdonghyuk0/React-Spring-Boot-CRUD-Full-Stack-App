package potato.dongHyukSpring.service;

import org.springframework.stereotype.Service;
import potato.dongHyukSpring.dto.MemberDto;
import potato.dongHyukSpring.entity.Member;

import java.util.List;

@Service

public interface MemberService {
    MemberDto createMember(MemberDto memberDto);

    MemberDto getMemberById(Long memberId);

    List<MemberDto> getAllMembers();

    MemberDto updateMember(Long memberId, MemberDto updatedMember);

    void deleteMember(Long memberId);
}
