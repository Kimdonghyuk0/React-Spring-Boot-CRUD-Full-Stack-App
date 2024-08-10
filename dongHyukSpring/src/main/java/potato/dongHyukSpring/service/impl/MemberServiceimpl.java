package potato.dongHyukSpring.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import potato.dongHyukSpring.dto.MemberDto;
import potato.dongHyukSpring.entity.Member;
import potato.dongHyukSpring.mapper.MemberMapper;
import potato.dongHyukSpring.repository.MemberRepository;
import potato.dongHyukSpring.service.MemberService;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MemberServiceimpl implements MemberService {

    private MemberRepository memberRepository;

    @Override
    public MemberDto createMember(MemberDto memberDto) {
        Member member = MemberMapper.mapToMember(memberDto); //dto to entity
        Member savedMember = memberRepository.save(member);  //member save to mysql


        return MemberMapper.mapToMemberDto(savedMember);
    }

    @Override
    public MemberDto getMemberById(Long memberId) {
        Member member  = memberRepository.findById(memberId)
                .orElseThrow(()->
                        new RuntimeException("Member not found : " + memberId));
        return MemberMapper.mapToMemberDto(member);
    }

    @Override
    public List<MemberDto> getAllMembers() {
        List<Member> members = memberRepository.findAll();
        return members.stream().map((member)->
                MemberMapper.mapToMemberDto(member)).collect(Collectors.toList());
    }

    @Override
    public MemberDto updateMember(Long memberId, MemberDto updatedMember) {
        Member member = memberRepository.findById(memberId).orElseThrow(
                ()->new RuntimeException("Member not found : " + memberId)
        );
        member.setName(updatedMember.getName());
        member.setEmail(updatedMember.getEmail());

        Member updatedMemberObj = memberRepository.save(member);
        return MemberMapper.mapToMemberDto(updatedMemberObj);
    }

    @Override
    public void deleteMember(Long memberId) {
        Member member = memberRepository.findById(memberId).orElseThrow(
                ()->new RuntimeException("Member not found : " + memberId)
        );
        memberRepository.deleteById(memberId);
    }
}
